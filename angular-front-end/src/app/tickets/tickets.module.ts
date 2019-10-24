import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './containers/tickets/tickets.component';
import { TicketsService } from './api/tickets.service';
import { TicketsState } from './state/tickets.state';
import { TicketsFacade } from './tickets.facade';
import { EditTicketComponent } from './components/edit-ticket/edit-ticket.component';
import { DeployTicketsComponent } from './components/deploy-tickets/deploy-tickets.component';


@NgModule({
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule,
  ],
  declarations: [
    TicketsComponent,
    EditTicketComponent,
    DeployTicketsComponent,
  ],
  providers: [
    TicketsService,
    TicketsFacade,
    TicketsState,
  ],
  entryComponents: [
    EditTicketComponent,
    DeployTicketsComponent
  ]
})
export class TicketsModule { }
