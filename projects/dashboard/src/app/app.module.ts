import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  entryComponents: [AppComponent]
})


export class DashboardModule {

  constructor(private injector: Injector) {
    const element = createCustomElement(AppComponent, { injector });
    customElements.define('custom-dashboard', element);
  }

  ngDoBootstrap() {

  }
}
