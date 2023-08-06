import {
  Injectable,
  NestMiddleware,
  Next,
  Req,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { env } from 'process';
import { JwtService } from '@nestjs/jwt';
import { ResponseHandler } from '../handlers/response.handler';
import { MessageStatus } from '../constants/message-status.const';
import { UserToken } from '../globaldto/user-token.dto';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    protected readonly _jwtService: JwtService,
    protected readonly _responseHandler: ResponseHandler,
  ) {}

  async use(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ): Promise<void> {
    try {
      const uToken = <string>req.headers['auth'];
      const user: UserToken = <UserToken>(
        JSON.parse(Buffer.from(uToken.split('.')[1], 'base64').toString())
      );
      const uJwtPayload = await this._jwtService.verifyAsync(uToken, {
        secret: env.JWT_SECRETS,
        ignoreExpiration: user.is_application,
      });
      next();
    } catch (error) {
      this._responseHandler.sendResponse(res, req, {
        message: MessageStatus.Token.UNAUTHORIZED,
        response: {
          user: req.headers['auth'],
        },
        status: HttpStatus.EXPECTATION_FAILED,
      });
    }
  }
}
