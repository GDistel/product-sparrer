import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ticket } from '../models/ticket.model';


@Injectable()
export class TicketsState{
  private updating$ = new BehaviorSubject<boolean>(false);
  private tickets$ = new BehaviorSubject<Ticket[]>(null);

  isUpdating$() {
    return this.updating$.asObservable();
  }

  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  getTickets$() {
    return this.tickets$.asObservable();
  }

  setTickets(tickets: Ticket[]) {
    this.tickets$.next(tickets);
  }

  updateDeleted(id: number){
    let updatedTickets = this.tickets$.getValue().filter(ticket =>
      ticket.id !== id
    );
    this.setTickets(updatedTickets);
  }

}
