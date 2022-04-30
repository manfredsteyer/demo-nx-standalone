import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom, inject, INJECTOR_INITIALIZER } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './app/+state';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from './environments/environment';
import { TicketsModule } from '@nx-example/booking/feature-tickets';
import { BOOKING_DOMAIN_PROVIDERS } from '@nx-example/booking/domain';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    ...importProvidersFrom(RouterModule.forRoot(APP_ROUTES)),
    ...importProvidersFrom(StoreModule.forRoot(reducer)),
    ...importProvidersFrom(EffectsModule.forRoot()),
    ...importProvidersFrom(StoreDevtoolsModule.instrument()),
    ...importProvidersFrom(HttpClientModule),
    // ...importProvidersFrom(TicketsModule),
    ...importProvidersFrom(BrowserAnimationsModule),
    ...importProvidersFrom(LayoutModule),
    ...BOOKING_DOMAIN_PROVIDERS,
  ]
});






// {
//   provide: INJECTOR_INITIALIZER,
//   multi: true,
//   useValue: () => inject(InitService).init()
// }