import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private serviceUrl = 'http://127.0.0.1:8000/api-token-auth/';

  httpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any>{
    return this.http.post(
      this.serviceUrl,
      JSON.stringify(user),
      { headers: this.httpHeaders }
    )
  }

}
