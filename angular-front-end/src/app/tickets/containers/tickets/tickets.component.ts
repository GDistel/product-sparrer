import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../api/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  tickets: any;

  constructor(private ticketsService: TicketsService) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    this.ticketsService.getTickets().subscribe(data => {
      this.tickets = data.results;
    });
  }

}
