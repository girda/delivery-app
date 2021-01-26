import {NgModule} from '@angular/core';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductGroupComponent} from './components/product-group/product-group.component';
import {ProductComponent} from './components/product-group/product/product.component';
import {ModalProductMenuComponent} from './components/modals/modal-product-menu/modal-product-menu.component';
import {MatDialogModule} from '@angular/material/dialog';
import {IconSpriteModule} from "ng-svg-icon-sprite";

@NgModule({
  imports: [
    IconSpriteModule
  ],
  declarations: [
    ProductCardComponent,
    ProductGroupComponent,
    ProductComponent,
    ModalProductMenuComponent
  ],
  exports: [
    ProductCardComponent,
    ProductGroupComponent,
    MatDialogModule
  ]
})
export class SharedModule {
}
