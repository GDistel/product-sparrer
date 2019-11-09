import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { AuthService } from './api/auth.service';
import { LoginFacade } from './login.facade';
import { CheckEmailComponent } from './components/check-email/check-email.component';

@NgModule({
  declarations: [
    LoginComponent,
    CheckEmailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ],
  providers: [
    AuthService,
    LoginFacade,

  ],
  entryComponents: [
    CheckEmailComponent
  ]
})
export class LoginModule { }
