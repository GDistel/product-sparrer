import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ADMIN_TOKEN } from 'client_secrets';

@Injectable()
export class AuthService {
  private serviceUrl = 'http://127.0.0.1:8000/';

  httpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': ADMIN_TOKEN
  });

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any>{
    return this.http.post(
      this.serviceUrl + 'api-token-auth/',
      JSON.stringify(user),
      { headers: this.httpHeaders }
    )
  }

  register(newUser: User): Observable<any>{
    return this.http.post(
      this.serviceUrl + 'api/users/',
      JSON.stringify(newUser),
      { headers: this.httpHeaders }
    )
  }

  verifyEmail(id: any): Observable<any>{
    return this.http.get(
      this.serviceUrl + 'verify-email/' + id,
      { headers: this.httpHeaders }
    )
  }

}
