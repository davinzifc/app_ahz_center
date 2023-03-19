import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserToken } from '../globaldto/user-token.dto';

export const UserJWT = createParamDecorator(
    (authParameter: string = 'auth', ctx: ExecutionContext): UserToken => {
      const request = ctx.switchToHttp().getRequest();
      const headerValue = request.headers[authParameter];
      // process the header value and return a usable object
      const user = processUserToken(headerValue);
      return user;
    },
  );

  function processUserToken(headerValue: string): UserToken {
    const token: UserToken = <UserToken>(
        JSON.parse(Buffer.from(headerValue.split('.')[1], 'base64').toString())
      );
    return token;
  }