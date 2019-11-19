import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Deployment } from '../../models/deployment.model';
import { TicketsFacade } from '../../tickets.facade';
import { SnackBarService } from 'src/app/shared/snack-bar.service';

@Component({
  selector: 'app-ticket-deployments',
  templateUrl: './ticket-deployments.component.html',
  styleUrls: ['./ticket-deployments.component.scss']
})
export class TicketDeploymentsComponent implements OnInit {
  @ViewChild('refreshToast', { static: false }) refreshToastRef: TemplateRef<any>;
  @ViewChild('deploymentStartedToast', { static: false }) deploymentStartedToastRef: TemplateRef<any>;

  deployments$: Observable<Deployment[]>;

  constructor(
    private ticketsFacade: TicketsFacade,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit() {
    this.deployments$ = this.ticketsFacade.getDeployments$();
    this.ticketsFacade.loadDeployments();
  }

  refresh(): void{
    this.ticketsFacade.loadDeployments();
    this.openSnackBar(this.refreshToastRef);
  }

  openSnackBar(toastRef: TemplateRef<any>): void {
    this.snackBarService.openSnackBar(toastRef, 2000);
  }

  deploymentStarted(){
    this.openSnackBar(this.deploymentStartedToastRef)
  }

}
