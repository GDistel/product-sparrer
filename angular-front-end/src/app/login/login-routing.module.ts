import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { VerifyEmailComponent } from './containers/verify-email/verify-email.component';
import { LoggedInGuardService as LoggedInGuard }  from 'src/app/core/logged-in-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'email-verification/:id',
    component: VerifyEmailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
