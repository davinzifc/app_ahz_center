import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './auth/pages/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { ResponseInterceptor } from './shared/interceptor/response-interceptor.interceptor';
import { OnlyOneSaveInputComponent } from './shared/alhz-custom-components/only-one-save-input/only-one-save-input.component';

@NgModule({
  declarations: [AppComponent, OnlyOneSaveInputComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
  ],
  providers: [MessagesModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
