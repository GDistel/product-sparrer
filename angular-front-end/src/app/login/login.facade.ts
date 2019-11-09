import { Injectable } from '@angular/core';
import { AuthService } from './api/auth.service';
import { LoginState } from './state/login.state';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable()
export class LoginFacade{

  constructor(
    private authService: AuthService,
    private loginState: LoginState
  ) { }

  login(user: User): void{
    this.authService.login(user).subscribe(
      data => this.setSession(data['token'], user),
      err => {
        this.logout();
        this.loginState.setCredentialsValidity(false)
      }
    )
  }

  register(newUser: User): void{
    this.authService.register(newUser).subscribe(
      data => console.log(data),
      err => {
        this.logout();
        this.loginState.setCredentialsValidity(false)
      }
    )
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    this.loginState.setLogIn(false);
    this.loginState.authToken = '';
    this.loginState.user = undefined;
  }

  setSession(authResult: any, user: User): void {
    let token = `Token ${authResult}`;
    localStorage.setItem('id_token', token );
    localStorage.setItem('user', JSON.stringify(user) );
    this.loginState.setLogIn(true);
    this.loginState.authToken = token;
    this.loginState.user = user;
  }

  isLoggedIn$(): Observable<boolean> {
    return this.loginState.isLoggedIn$();
  }

  areCredentialsValid$(): Observable<boolean> {
    return this.loginState.areCredentialsValid$()
  }

}
