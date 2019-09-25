import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketsService } from './api/tickets.service';
import { TicketsState } from './state/tickets.state';
import { Ticket } from './models/ticket.model';


@Injectable()
export class TicketsFacade{

  constructor(
    private ticketsService: TicketsService,
    private ticketsState: TicketsState
  ) { }

  isUpdating$(): Observable<boolean> {
    return this.ticketsState.isUpdating$();
  }

  getTickets$(): Observable<Ticket[]> {
    return this.ticketsState.getTickets$();
  }

  loadTickets() {
    this.ticketsService.getTickets()
      .subscribe(tickets => this.ticketsState.setTickets(tickets.results));
  }

  deleteTicket(id){
    this.ticketsService.deleteTicket(id)
  }

}
