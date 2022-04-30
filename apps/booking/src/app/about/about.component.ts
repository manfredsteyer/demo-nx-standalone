import { Component, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-about',
  template: `
    <h1 class="title">About</h1>
    <ng-container #container></ng-container>
  `
})
export class AboutComponent {
  title = 'Standalone Demo';

  @ViewChild('container', {read: ViewContainerRef})
  viewContainer!: ViewContainerRef;

  async ngOnInit() {
    const esm = await import('./lazy/lazy.component');
    const ref = this.viewContainer.createComponent(esm.LazyComponent)
    ref.instance.title = `Lazy Sub Component !!`;
  }
}
