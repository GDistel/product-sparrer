import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TicketsFacade } from '../../tickets.facade';
import { Ticket } from '../../models/ticket.model';
import { ConfirmationPromptComponent } from 'src/app/shared/confirmation-prompt/confirmation-prompt.component';
import { EditTicketComponent } from '../../components/edit-ticket/edit-ticket.component';
import { DeployTicketsComponent } from '../../components/deploy-tickets/deploy-tickets.component';
import { PreviousRouteService } from 'src/app/core/previous-route.service';
import { SnackBarService } from 'src/app/shared/snack-bar.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit, AfterViewInit {
  @ViewChild('loggedInToast', { static: false }) loggedInToastRef: TemplateRef<any>;

  tickets$: Observable<Ticket[]>;
  isUpdating$: Observable<boolean>;
  displayedColumns: string[] = ["type", "status", "subject", "body", "actions"];

  constructor(
    private previousRouteService: PreviousRouteService,
    private ticketsFacade: TicketsFacade,
    private dialog: MatDialog,
    private snackBarService: SnackBarService,
  ) {
    this.isUpdating$ = ticketsFacade.isUpdating$();
  }

  ngOnInit() {
    this.tickets$ = this.ticketsFacade.getTickets$();
    this.ticketsFacade.loadTickets();
  }

  ngAfterViewInit(){
    this.verifyRecentLogin();
  }

  openDialog(component: any, data?: any){
    const dialogRef = this.dialog.open(component, {
      minWidth: '30%',
      maxWidth: '50%',
      data: data,
      autoFocus: false,
    });
    return dialogRef
  }

  createTicket(): void{
    const data = { action: 'create' };
    const dialogRef = this.openDialog(EditTicketComponent, data);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.ticketsFacade.createTicket(result);
      }
    });
  }

  deployTickets(): void{
    const dialogRef = this.openDialog(DeployTicketsComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.ticketsFacade.deployTickets(result)
      }
    });
  }

  updateTicket(ticket: Ticket): void{
    const data = { action: 'update', ticket: ticket };
    const dialogRef = this.openDialog(EditTicketComponent, data);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.ticketsFacade.updateTicket(ticket.id, result);
      }
    });
  }

  deleteTicket(id: number): void{
    const data = { action: 'delete', item: 'ticket' };
    const dialogRef = this.openDialog(ConfirmationPromptComponent, data);
    dialogRef.afterClosed().subscribe(result =>
      result === data.action?
        this.ticketsFacade.deleteTicket(id):
        null
    );
  }

  verifyRecentLogin(): void {
    let previousUrl = this.previousRouteService.getPreviousUrl();
    if (previousUrl === '/'){
      this.snackBarService.openSnackBar(this.loggedInToastRef, 4000)
    }
  }

}
