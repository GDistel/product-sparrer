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

  isLoggedIn$(): Observable<boolean>{
    return this.loggedIn$.asObservable()
  }

  setLogIn(status: boolean): void{
    this.loggedIn$.next(status)
    if (!status){
      this.user = undefined
      this.authToken = '';
    }
  }

  areCredentialsValid$(): Observable<boolean>{
    return this.validCredentials$.asObservable()
  }

  setCredentialsValidity(status: boolean): void{
    this.validCredentials$.next(status)
  }

}
