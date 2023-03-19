import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ResponseHandler } from '../shared/handlers/response.handler';
import { AuthService } from './auth.service';
import { UserSingInDto } from './dto/auth-singin.dto';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    protected readonly _responseHandler: ResponseHandler
    ) {}

  @Patch('sing-in')
  async singIng(
    @Req() req: Request,
    @Res() res: Response,
    @Body() uData: UserSingInDto 
    ) {
    const resultData = await this.authService.singIn(uData);
    this._responseHandler.sendResponse(res, req, resultData);
  }

  @Post()
  save(){

  }
}
