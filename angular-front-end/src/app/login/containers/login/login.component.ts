import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginFacade } from '../../login.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loggedIn: boolean;
  validCredentials: boolean;

  constructor(
    private loginFacade: LoginFacade,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    }),
    this.isLoggedIn(),
    this.checkCredentials()
  }

  login(): void{
    let user = this.form.value;
    this.loginFacade.login(user);
  }

  isLoggedIn(): void{
    this.loginFacade.isLoggedIn$().subscribe( status => {
      this.loggedIn = status;
      this.loggedIn?
        this.router.navigate(['tickets']):
        null
    })
  }

  checkCredentials(): void{
    this.loginFacade.areCredentialsValid$().subscribe( res =>
      this.validCredentials = res
    )
  }

}
