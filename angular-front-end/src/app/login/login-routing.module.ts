import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoggedInGuardService as LoggedInGuard }  from 'src/app/core/logged-in-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoggedInGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
