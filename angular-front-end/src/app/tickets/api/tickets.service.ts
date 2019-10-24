import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { LoginState } from '../../login/state/login.state';


@Injectable()
export class TicketsService {
  private serviceUrl = 'http://127.0.0.1:8000/api/tickets/';

  constructor(
    private http: HttpClient,
    private loginState: LoginState,
  ) { }

  getHeaders(){
    return new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization': this.loginState.authToken,
          });
  }

  getTickets(): Observable<any>{
    return this.http.get<Ticket[]>(this.serviceUrl, {headers: this.getHeaders()})
  }

  createTicket(ticket: Ticket): Observable<any>{
    return this.http.post(this.serviceUrl, JSON.stringify(ticket), {headers: this.getHeaders()})
  }

  updateTicket(id: number, ticket: Ticket): Observable<any>{
    return this.http.put(this.serviceUrl + id + '/', ticket, {headers: this.getHeaders()})
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete(this.serviceUrl + id, {headers: this.getHeaders()})
  }

}
