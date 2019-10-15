import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TESTTOKEN } from 'client_secrets';
import { Ticket } from '../models/ticket.model';
import { LoginState } from '../../login/state/login.state';


@Injectable()
export class TicketsService {
  private serviceUrl = 'http://127.0.0.1:8000/api/tickets/';

  httpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': this.loginState.authToken,
  });

  constructor(
    private http: HttpClient,
    private loginState: LoginState
  ) { }

  getTickets(): Observable<any>{
    return this.http.get<Ticket[]>(this.serviceUrl, {headers: this.httpHeaders})
  }

  createTicket(ticket: Ticket): Observable<any>{
    return this.http.post(this.serviceUrl, JSON.stringify(ticket), {headers: this.httpHeaders})
  }

  updateTicket(id: number, ticket: Ticket): Observable<any>{
    return this.http.put(this.serviceUrl + id + '/', ticket, {headers: this.httpHeaders})
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete(this.serviceUrl + id, {headers: this.httpHeaders})
  }

}
