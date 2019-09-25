import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TicketsFacade } from '../../tickets.facade';
import { Ticket } from '../../models/ticket.model';
import { ConfirmationPromptComponent } from 'src/app/shared/confirmation-prompt/confirmation-prompt.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  @Input() tickets$: Ticket[];
  isUpdating$: Observable<boolean>;
  displayedColumns: string[] = ["type", "status", "subject", "body", "actions"];

  constructor(
    private ticketsFacade: TicketsFacade,
    private dialog: MatDialog
  ) {
    this.isUpdating$ = ticketsFacade.isUpdating$();
  }

  ngOnInit() {
    this.ticketsFacade.getTickets$().subscribe(tickets => this.tickets$ = tickets);
    this.ticketsFacade.loadTickets();
  }

  openDialog(component: any, data?: any){
    const dialogRef = this.dialog.open(component, {
      minWidth: '40%',
      maxWidth: '80%',
      data: data,
      autoFocus: false,
    });
    return dialogRef
  }

  deleteTicket(id): void{
    const data = { action: 'delete', item: 'ticket' };
    const dialogRef = this.openDialog(ConfirmationPromptComponent, data);
    dialogRef.afterClosed().subscribe(result =>
      result === data.action?
        this.ticketsFacade.deleteTicket(id):
        null
    );
  }



}
