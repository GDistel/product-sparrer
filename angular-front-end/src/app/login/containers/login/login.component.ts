import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginFacade } from '../../login.facade';
import { User } from '../../models/user.model';
import { PreviousRouteService } from 'src/app/core/previous-route.service';
import { SnackBarService } from 'src/app/shared/snack-bar.service';
import { MatDialog } from '@angular/material/dialog';
import { CheckEmailComponent } from '../../components/check-email/check-email.component';

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
  registerContext: boolean = false;
  userExists: boolean = false;

  constructor(
    private previousRouteService: PreviousRouteService,
    private loginFacade: LoginFacade,
    private router: Router,
    private snackBarService: SnackBarService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    }),
    this.isLoggedIn(),
    this.checkCredentials()
  }

  ngAfterViewInit(){
    this.verifyLogout();
  }

  openDialog(component: any, data?: any){
    const dialogRef = this.dialog.open(component, {
      minWidth: '30%',
      maxWidth: '50%',
      data: data,
      autoFocus: false,
    });
    return dialogRef
  }

  checkEmail(): void{
    const dialogRef = this.openDialog(CheckEmailComponent);
    dialogRef.afterClosed().subscribe( _  => { this.registerContext = false });
  }

  login(): void{
    let user: User = this.form.value;
    this.loginFacade.login(user);
  }

  register(): void{
    let newUser: User = this.form.value;
    this.loginFacade.login(newUser);
    if (!this.loggedIn){
      this.loginFacade.register(newUser);
      this.form.reset();
      this.checkEmail();
    }
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
      this.registerContext?
        this.validCredentials = true:
        this.validCredentials = res
    )
  }

  verifyLogout(): void {
    let previousUrl = this.previousRouteService.getPreviousUrl();
    if (previousUrl !== '/'){
      this.snackBarService.openSnackBar(this.loggedOutToastRef, 4000)
    }
  }

}
