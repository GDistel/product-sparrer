import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../login/login.module';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule
  ],
  providers: [
    AuthGuardService
  ]
})
export class CoreModule { }
