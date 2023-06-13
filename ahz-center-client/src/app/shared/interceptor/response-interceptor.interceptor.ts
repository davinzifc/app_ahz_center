import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { UserDataService } from '../../auth/services/user-data.service';
import { ResponseInterface } from '../interfaces/response.interface';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private _userDataService: UserDataService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const response = next.handle(request);
    return response;
  }
}
