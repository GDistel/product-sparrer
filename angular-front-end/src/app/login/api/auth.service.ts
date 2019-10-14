import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  private serviceUrl = 'http://127.0.0.1:8000/api-token-auth/';
  public loggedIn = new Subject<boolean>();
  public invalidCredentials = new Subject<boolean>();

  httpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  constructor(private http: HttpClient) { }

  login(user: any){
    this.http.post(
      this.serviceUrl,
      JSON.stringify(user),
      {headers: this.httpHeaders}
    ).subscribe(
        data => this.setSession(data['token']),
        err => {
          this.logout();
          this.invalidCredentials.next(true)
        }
      )
  }

  logout() {
    localStorage.removeItem('id_token');
    this.loggedIn.next(false)
  }

  setSession(authResult) {
    localStorage.setItem('id_token', `Token ${authResult}`);
    this.loggedIn.next(true)
  }

}
