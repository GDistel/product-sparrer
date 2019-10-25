import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketsService } from './api/tickets.service';
import { TicketsState } from './state/tickets.state';
import { Ticket } from './models/ticket.model';
import { Deployment } from './models/deployment.model';


@Injectable()
export class TicketsFacade{

  constructor(
    private ticketsService: TicketsService,
    private ticketsState: TicketsState
  ) { }

  isUpdating$(): Observable<boolean> {
    return this.ticketsState.isUpdating$();
  }

  deployTickets(deployment: Deployment): void{
    this.ticketsService.deployTickets(deployment)
      .subscribe( _ => this.loadDeployments());
  }

  getDeployments$(): Observable<Deployment[]> {
    return this.ticketsState.getDeployments$();
  }

  loadDeployments(): void{
    this.ticketsService.getDeployments$()
      .subscribe(deployments => this.ticketsState.setDeployments(deployments.results))
  }

  getTickets$(): Observable<Ticket[]> {
    return this.ticketsState.getTickets$();
  }

  loadTickets(): void{
    this.ticketsService.getTickets()
      .subscribe(tickets => this.ticketsState.setTickets(tickets.results))
  }

  deleteTicket(id: number): void{
    this.ticketsService.deleteTicket(id)
      .subscribe( _ => this.ticketsState.updateDeleted(id));
  }

  createTicket(ticket: Ticket): void{
    this.ticketsService.createTicket(ticket)
      .subscribe( _ => this.loadTickets());
  }

  updateTicket(id: number, ticket: Ticket): void{
    this.ticketsService.updateTicket(id,ticket)
      .subscribe( _ => this.loadTickets());
  }

}
