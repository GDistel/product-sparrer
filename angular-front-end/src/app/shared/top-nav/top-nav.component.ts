import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginState } from 'src/app/login/state/login.state';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  user: string;

  constructor(
    private loginState: LoginState,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginState.user?
      this.user = this.loginState.user.username:
      this.user = ''
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    this.loginState.setLogIn(false);
    this.router.navigate(['']);
  }

}
