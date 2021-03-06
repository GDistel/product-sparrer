import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs';
import { TicketsFacade } from '../../tickets.facade';
import { LoginFacade } from 'src/app/login/login.facade';
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
export class TicketsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('loggedInToast', { static: false }) loggedInToastRef: TemplateRef<any>;
  @ViewChild( MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild( MatSort, { static: false }) sort: MatSort;

  isUpdating$: Observable<boolean>;
  displayedColumns: string[] = ["type", "status", "subject", "body", "actions"];
  ticketsSubscription: any;
  dataLength: number = 0;
  dataSource = new MatTableDataSource<Ticket>();

  constructor(
    private router: Router,
    private previousRouteService: PreviousRouteService,
    private ticketsFacade: TicketsFacade,
    private loginFacade: LoginFacade,
    private dialog: MatDialog,
    private snackBarService: SnackBarService,
  ) {
    this.isUpdating$ = ticketsFacade.isUpdating$();
  }

  ngOnInit() {
    this.ticketsSubscription = this.ticketsFacade.getTickets$().subscribe( tickets => {
      if (tickets){
        this.dataSource.data = tickets;
        this.dataLength = tickets.length;
      } else {
        this.dataSource.data = [];
        this.dataLength = 0;
      }
    });
    this.ticketsFacade.loadTickets();
  }

  ngAfterViewInit(): void {
    this.verifyRecentLogin();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(){
    this.ticketsSubscription.unsubscribe();
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
    let userEmail: string = this.loginFacade.getUser().email;
    let destinataries: string[] = [userEmail];
    const dialogRef = this.openDialog(DeployTicketsComponent, { emails: destinataries });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.ticketsFacade.deployTickets(result);
        this.router.navigate(['tickets/deployments']);
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

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
