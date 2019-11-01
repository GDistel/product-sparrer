import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoggedInGuardService implements CanActivate{

  constructor(
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!localStorage.getItem('id_token')){
      return true
    }
    this.router.navigate(['tickets'])
  }
}
