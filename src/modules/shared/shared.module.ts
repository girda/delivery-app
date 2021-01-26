import {NgModule} from '@angular/core';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductGroupComponent} from './components/product-group/product-group.component';
import {ProductComponent} from './components/product-group/product/product.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [],
  declarations: [
    ProductCardComponent,
    ProductGroupComponent,
    ProductComponent,
    ModalComponent
  ],
  exports: [
    ProductCardComponent,
    ProductGroupComponent,
    ModalComponent
  ]
})
export class SharedModule {
}
