import { importProvidersFrom } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BookingEffects } from "./+state/effects";
import { bookingFeature } from "./+state/reducers";

export const BOOKING_DOMAIN_PROVIDERS = [
    ...importProvidersFrom(StoreModule.forFeature(bookingFeature)),
    ...importProvidersFrom(EffectsModule.forFeature([BookingEffects])),
];
