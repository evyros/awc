import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from 'mylib';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ButtonModule {
  constructor(injector: Injector) {
    const ngElement = createCustomElement(ButtonComponent, {
      injector,
    });
    console.log('looool');
    customElements.define('lib-button', ngElement);
  }
}
