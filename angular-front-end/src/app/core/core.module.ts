import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../login/login.module';
import { AuthGuardService } from './auth-guard.service';
import { LoggedInGuardService } from './logged-in-guard.service';
import { PreviousRouteService } from './previous-route.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule
  ],
  providers: [
    AuthGuardService,
    LoggedInGuardService,
    PreviousRouteService
  ]
})
export class CoreModule { }
