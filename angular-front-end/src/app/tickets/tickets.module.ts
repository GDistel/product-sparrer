import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './containers/tickets/tickets.component';
import { TicketsService } from './api/tickets.service';
import { TicketsState } from './state/tickets.state';
import { TicketsFacade } from './tickets.facade';



@NgModule({
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule,
  ],
  declarations: [
    TicketsComponent,
  ],
  providers: [
    TicketsService,
    TicketsFacade,
    TicketsState,
  ],
  entryComponents: []
})
export class TicketsModule { }
