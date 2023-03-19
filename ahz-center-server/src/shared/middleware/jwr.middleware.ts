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

@Injectable()
export class JwtMiddleware implements NestMiddleware {
    constructor(
        protected readonly _jwtService: JwtService,
        protected readonly _responseHandler: ResponseHandler
    ) { }

    async use(
        @Req() req: Request,
        @Res() res: Response,
        @Next() next: NextFunction,
    ): Promise<void> {
        try {
            const token = <string>req.headers['auth'];
            const jwtPayload = await this._jwtService.verifyAsync(token, {
                secret: env.JWT_SECRETS
            });
            console.log(jwtPayload);
            next();
        } catch (error) {
            this._responseHandler.sendResponse(res, req, {
                message: MessageStatus.Token.UNAUTHORIZED,
                response: req.headers['auth'],
                status: HttpStatus.UNAUTHORIZED
            });
        }
    }
}
