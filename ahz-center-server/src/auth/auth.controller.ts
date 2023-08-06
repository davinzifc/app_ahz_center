import { Controller, Post, Body, Patch, UseInterceptors } from '@nestjs/common';
import { ResponseHandler } from '../shared/handlers/response.handler';
import { AuthService } from './auth.service';
import { UserSingInDto } from './dto/auth-singin.dto';
import { ResponseInterceptor } from '../shared/interceptors/response.interseptor';

@Controller()
@UseInterceptors(ResponseInterceptor)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    protected readonly _responseHandler: ResponseHandler
    ) {}

  @Patch('sing-in')
  async singIng(
    @Body() uData: UserSingInDto 
    ) {
    return await this.authService.singIn(uData);
  }

  @Post()
  save(){

  }
}
