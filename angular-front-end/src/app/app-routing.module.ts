import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tickets',
    loadChildren: './tickets/tickets.module#TicketsModule',
  },
  {
    path: '',
    loadChildren: './tickets/tickets.module#TicketsModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
