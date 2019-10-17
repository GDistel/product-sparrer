import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginState } from '../login/state/login.state';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(public loginState: LoginState) {}

  canActivate(): boolean {
    if (localStorage.getItem('id_token')){
      return true
    } else{
      return this.loginState.loggedIn$.value
    }
  }
}
