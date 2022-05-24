// libs/booking/domain/src/lib/domain.providers.ts

import { importProvidersFrom } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BookingEffects } from "./+state/effects";
import { bookingFeature } from "./+state/reducers";

export function forBookingDomain() {
    return [
        importProvidersFrom(StoreModule.forFeature(bookingFeature)),
        importProvidersFrom(EffectsModule.forFeature([BookingEffects])),
    ];
}
