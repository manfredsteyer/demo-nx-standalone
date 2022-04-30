import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '@nx-example/booking/domain';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-my-tickets',
  template: `
    <h2 class="title">{{title}}</h2>

    <ng-container *ngFor="let ticket of tickets">
        <flight-card [item]="ticket" [showEditButton]="false"></flight-card>
    </ng-container>
  `
})
export class MyTicketsComponent implements OnInit {

  @Input() title = 'My Tickets';
  @Input() limit = -1;

  tickets: Flight[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.tickets = this.ticketService.get(this.limit);
  }

}