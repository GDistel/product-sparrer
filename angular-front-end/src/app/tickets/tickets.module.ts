import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './containers/tickets/tickets.component';
import { TicketsService } from './api/tickets.service';


@NgModule({
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule,
  ],
  declarations: [
    TicketsComponent,
  ],
  providers: [TicketsService],
  entryComponents: []
})
export class TicketsModule { }
