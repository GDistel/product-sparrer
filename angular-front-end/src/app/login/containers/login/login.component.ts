import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginFacade } from '../../login.facade';
import { User } from '../../models/user.model';
import { PreviousRouteService } from 'src/app/core/previous-route.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('loggedOutToast', { static: false }) loggedOutToastRef: TemplateRef<any>;
  form: FormGroup;
  loggedIn: boolean;
  validCredentials: boolean;

  constructor(
    private previousRouteService: PreviousRouteService,
    private loginFacade: LoginFacade,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    }),
    this.isLoggedIn(),
    this.checkCredentials()
  }

  ngAfterViewInit(){
    this.verifyLogout();
  }

  login(): void{
    let user: User = this.form.value;
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

  openSnackBar(targetSnackbar: TemplateRef<any>, delay: number): void {
    this.snackBar.openFromTemplate(targetSnackbar, {
      duration: delay,
    });
  }

  verifyLogout(): void {
    let previousUrl = this.previousRouteService.getPreviousUrl();
    if (previousUrl !== '/'){
      this.openSnackBar(this.loggedOutToastRef, 4000)
    }
  }

}
