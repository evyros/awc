import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from 'mylib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private readonly injector: Injector) {
    const ngElement = createCustomElement(ButtonComponent, {
      injector,
    });

    customElements.define('lib-button', ngElement);
  }

}
