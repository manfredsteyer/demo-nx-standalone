import { Component } from '@angular/core';
import { TicketsModule } from './tickets.module';

@Component({
  selector: 'app-next-flight',
  standalone: true,
  template: `
    <app-my-tickets [limit]="1" title="Next Flight"></app-my-tickets>
  `,
  imports: [
    TicketsModule
  ]
})
export class NextFlightComponent {
}