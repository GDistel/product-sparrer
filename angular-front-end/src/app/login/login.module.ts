import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { AuthService } from './api/auth.service';
import { LoginFacade } from './login.facade';
import { LoginState } from './state/login.state';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ],
  providers: [
    AuthService,
    LoginFacade,
  ]
})
export class LoginModule { }
