import { Injectable } from '@angular/core';
import { Flight } from '@nx-example/booking/domain';

@Injectable()
export class TicketService {

    readonly tickets: Flight[] = [
        { id: 4711, from: 'Graz', to: 'Düsseldorf', delayed: false, date: new Date().toISOString()},
        { id: 4712, from: 'Graz', to: 'Paderborn', delayed: false, date: new Date().toISOString()}
    ];

    constructor() { 
        console.log('creating ticket service');
    }

    get(limit: number = -1) {
        if (limit === -1) {
            return this.tickets;
        }
        return this.tickets.slice(0, limit);
    }
}