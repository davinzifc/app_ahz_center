import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserByRoleRepository } from '../../auth/user-by-role/user-by-role.repository';
import { UserToken } from '../globaldto/user-token.dto';
import "reflect-metadata";

@Injectable()
export class ValidRoleGuard implements CanActivate {

    constructor(
        private readonly _userByRoleRepository: UserByRoleRepository,
        private readonly reflector: Reflector
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const roles: number | undefined = this.reflector.get<number>('roles', context.getHandler());
        const request = context.switchToHttp().getRequest();
        const token = this.processUserToken(request.headers['auth']);
        const role = await this._userByRoleRepository.isValidRole(token.user_id);
        
        if (role && role <= roles ) {
            return true;
        } else {
            return false;
        }
    }

    private processUserToken(headerValue: string): UserToken {
        const token: UserToken = <UserToken>(
            JSON.parse(Buffer.from(headerValue.split('.')[1], 'base64').toString())
        );
        return token;
    }
}
