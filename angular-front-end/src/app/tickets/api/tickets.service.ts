import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { Deployment } from '../models/deployment.model';
import { LoginState } from '../../login/state/login.state';


@Injectable()
export class TicketsService {
  private serviceUrl = 'http://127.0.0.1:8000/api/';

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
    return this.http.get<Ticket[]>(
      this.serviceUrl + 'tickets/', {headers: this.getHeaders()}
    )
  }

  createTicket(ticket: Ticket): Observable<any>{
    return this.http.post(
      this.serviceUrl + 'tickets/', JSON.stringify(ticket), {headers: this.getHeaders()}
    )
  }

  updateTicket(id: number, ticket: Ticket): Observable<any>{
    return this.http.put(
      this.serviceUrl + 'tickets/' + id + '/', ticket, {headers: this.getHeaders()}
    )
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete(
      this.serviceUrl + 'tickets/' + id, {headers: this.getHeaders()}
    )
  }

  deployTickets(deployment: Deployment): Observable<any>{
    return this.http.post(
      this.serviceUrl + 'tickets_deployments/', JSON.stringify(deployment), {headers: this.getHeaders()}
    )
  }

  getDeployments$(): Observable<any>{
    return this.http.get<Deployment[]>(
      this.serviceUrl + 'tickets_deployments/', {headers: this.getHeaders()}
    )
  }

}
