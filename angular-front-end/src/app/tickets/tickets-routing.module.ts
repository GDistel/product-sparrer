import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './containers/tickets/tickets.component';
import { TicketDeploymentsComponent } from './containers/ticket-deployments/ticket-deployments.component';


const routes: Routes = [
  {
    path: '',
    component: TicketsComponent
  },
  {
    path: 'deployments',
    component: TicketDeploymentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
