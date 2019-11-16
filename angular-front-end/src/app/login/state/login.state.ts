import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginState{
  public loggedIn$ = new BehaviorSubject<boolean>(false);
  public validCredentials$ = new BehaviorSubject<boolean>(true);
  public authToken: string = localStorage.getItem('id_token');
  public user: User = JSON.parse(localStorage.getItem('user'));
  public verifiedEmail$ = new BehaviorSubject<any>(false);

  isLoggedIn$(): Observable<boolean>{
    return this.loggedIn$.asObservable()
  }

  isEmailVerified$(): Observable<boolean>{
    return this.verifiedEmail$.asObservable()
  }

  setLogIn(status: boolean): void{
    this.loggedIn$.next(status)
    if (!status){
      this.user = undefined
      this.authToken = '';
    }
  }

  setVerifiedEmail(user: any){
    this.verifiedEmail$.next(user)
  }

  areCredentialsValid$(): Observable<boolean>{
    return this.validCredentials$.asObservable()
  }

  setCredentialsValidity(status: boolean): void{
    this.validCredentials$.next(status)
  }

}
