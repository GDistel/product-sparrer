import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './containers/tickets/tickets.component';


@NgModule({
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule,
  ],
  declarations: [
    TicketsComponent,
  ],
  entryComponents: [
    
  ]
})
export class TicketsModule { }
