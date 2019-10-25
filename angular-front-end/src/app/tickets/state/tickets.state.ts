import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { Deployment } from '../models/deployment.model';

@Injectable()
export class TicketsState{
  private updating$ = new BehaviorSubject<boolean>(false);
  private tickets$ = new BehaviorSubject<Ticket[]>(null);
  private deployments$ = new BehaviorSubject<Deployment[]>(null);


  isUpdating$() {
    return this.updating$.asObservable();
  }

  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  getTickets$() {
    return this.tickets$.asObservable();
  }

  getDeployments$() {
    return this.deployments$.asObservable();
  }

  setTickets(tickets: Ticket[]) {
    this.tickets$.next(tickets);
  }

  setDeployments(deployments: Deployment[]){
    this.deployments$.next(deployments);
  }

  updateDeleted(id: number){
    let updatedTickets: Ticket[] = this.tickets$.getValue().filter(ticket =>
      ticket.id !== id
    );
    this.setTickets(updatedTickets);
  }

}
