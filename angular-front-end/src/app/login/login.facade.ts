import { Injectable } from '@angular/core';
import { AuthService } from './api/auth.service';
import { LoginState } from './state/login.state';
import { Observable } from 'rxjs';

@Injectable()
export class LoginFacade{

  constructor(
    private authService: AuthService,
    private loginState: LoginState
  ) { }

  login(user: any): void{
    this.authService.login(user).subscribe(
      data => this.setSession(data['token']),
      err => {
        this.logout();
        this.loginState.setCredentialsValidity(false)
      }
    )
  }

  logout(): void {
    localStorage.removeItem('id_token');
    this.loginState.setLogIn(false)
  }

  setSession(authResult: any): void {
    localStorage.setItem('id_token', `Token ${authResult}`);
    this.loginState.setLogIn(true)
  }

  isLoggedIn$(): Observable<boolean> {
    return this.loginState.isLoggedIn$();
  }

  areCredentialsValid$(): Observable<boolean> {
    return this.loginState.areCredentialsValid$()
  }

}
