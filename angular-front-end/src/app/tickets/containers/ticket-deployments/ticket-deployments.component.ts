import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Deployment } from '../../models/deployment.model';


@Component({
  selector: 'app-ticket-deployments',
  templateUrl: './ticket-deployments.component.html',
  styleUrls: ['./ticket-deployments.component.scss']
})
export class TicketDeploymentsComponent implements OnInit {
  deployments$: Observable<Deployment[]>;

  constructor() { }

  ngOnInit() {
  }

}
