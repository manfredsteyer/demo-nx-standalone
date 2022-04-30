import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-booking',
        loadChildren: () =>
            import('@nx-example/booking/feature-book').then(m => m.FLIGHT_BOOKING_ROUTES)
    },
    {
        path: 'next-flight',
        loadComponent: () => 
            import('@nx-example/booking/feature-tickets').then(m => m.NextFlightComponent)
    },
    {
        path: 'tickets',
        loadChildren: () =>
            import('@nx-example/booking/feature-tickets').then(m => m.TicketsModule)
    },
    {
        path: 'about',
        loadComponent: () => 
            import('./about/about.component').then(m => m.AboutComponent)
    },
];
