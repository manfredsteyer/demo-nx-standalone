import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { BookingSlice, delayFlight, loadFlights, selectFlights } from "@nx-example/booking/domain";
import { FlightCardComponent } from "@nx-example/booking/ui-common";
import { CityValidator } from "@nx-example/shared/util-common";
import { take } from "rxjs";

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    FlightCardComponent,
    CityValidator,
  ],
  selector: 'flight-search',
  templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;
  
  flights$ = this.store.select(selectFlights);

  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(@Inject(Store) private store: Store<BookingSlice>) {
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.store.dispatch(loadFlights({
      from: this.from, 
      to: this.to 
    }));
  }

  delay(): void {
    this.flights$.pipe(take(1)).subscribe(flights => {
      const id = flights[0].id;
      this.store.dispatch(delayFlight({id}));
    });
  }

}

