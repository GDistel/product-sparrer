import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Deployment } from '../../models/deployment.model';
import { TicketsFacade } from '../../tickets.facade';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-ticket-deployments',
  templateUrl: './ticket-deployments.component.html',
  styleUrls: ['./ticket-deployments.component.scss']
})
export class TicketDeploymentsComponent implements OnInit {
  @ViewChild('refreshToast', { static: false }) refreshToastRef: TemplateRef<any>;
  deployments$: Observable<Deployment[]>;

  constructor(
    private ticketsFacade: TicketsFacade,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.deployments$ = this.ticketsFacade.getDeployments$();
    this.ticketsFacade.loadDeployments();
  }

  refresh(): void{
    this.ticketsFacade.loadDeployments();
    this.openSnackBar();
  }

  openSnackBar(): void {
    this.snackBar.openFromTemplate(this.refreshToastRef, {
      duration: 2000,
    });
  }

}
