import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TESTTOKEN } from 'client_secrets';


@Injectable()
export class TicketsService {
  private serviceUrl = 'http://127.0.0.1:8000/api/tickets/';

  httpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': TESTTOKEN,
  });

  constructor(private http: HttpClient) { }

  getTickets(): Observable<any>{
    return this.http.get<any>(this.serviceUrl, {headers: this.httpHeaders});
  }

}
