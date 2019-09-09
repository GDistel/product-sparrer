import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { TicketsFacade } from '../../tickets.facade';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  @Input() tickets$: Ticket[];
  isUpdating$: Observable<boolean>;

  constructor(private ticketsFacade: TicketsFacade) {
    this.isUpdating$ = ticketsFacade.isUpdating$();
  }

  ngOnInit() {
    this.ticketsFacade.getTickets$().subscribe(tickets => this.tickets$ = tickets);
    this.ticketsFacade.loadTickets();
  }



}
