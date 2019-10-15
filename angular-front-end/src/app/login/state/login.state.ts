import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginState{
  public loggedIn$ = new BehaviorSubject<boolean>(false);
  public validCredentials$ = new BehaviorSubject<boolean>(true);

  isLoggedIn$(): Observable<boolean>{
    return this.loggedIn$.asObservable()
  }

  setLogIn(status: boolean): void{
    this.loggedIn$.next(status)
  }

  areCredentialsValid$(): Observable<boolean>{
    return this.validCredentials$.asObservable()
  }

  setCredentialsValidity(status: boolean): void{
    this.validCredentials$.next(status)
  }

}
