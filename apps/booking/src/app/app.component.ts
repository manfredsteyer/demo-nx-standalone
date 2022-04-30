import { HomeComponent } from './home/home.component';

// Options for importing esm modules
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs';
import { Component, Inject } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SidebarComponent } from '@nx-example/shared/ui-shell';

import material from './material';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    ...material,

    RouterModule,
    CommonModule,

    NavbarComponent,
    SidebarComponent,

    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    @Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver) {
  }

}
