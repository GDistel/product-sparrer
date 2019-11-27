import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginFacade } from '../../login.facade';


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  id: string;
  emailVerified: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginFacade: LoginFacade,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isLoggedIn(),
    this.loginFacade.isEmailVerified$().subscribe(
      user => {
        this.emailVerified = user.verified_email;
        this.emailVerified?
          this.loginFacade.login(user):
          null
    });
    this.loginFacade.verifyEmail(this.id);
  }



  isLoggedIn(): void{
    this.loginFacade.isLoggedIn$().subscribe( status => {
      status?
        this.router.navigate(['tickets']):
        null
    })
  }

}
