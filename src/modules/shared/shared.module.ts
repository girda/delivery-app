import {NgModule} from '@angular/core';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductGroupComponent} from './components/product-group/product-group.component';
import {ProductComponent} from './components/product-group/product/product.component';
import {ModalProductMenuComponent} from './components/modals/modal-product-menu/modal-product-menu.component';
import {MatDialogModule} from '@angular/material/dialog';
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { ModalProfileEditComponent } from './components/modals/modal-profile-edit/modal-profile-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ModalProductComponent } from './components/modals/modal-product/modal-product.component';
import { ModalBasketComponent } from './components/modals/modal-basket/modal-basket.component';
import { ModalConfirmComponent } from './components/modals/modal-confirm/modal-confirm.component';
import { ModalAddCreditCardComponent } from './components/modals/modal-add-credit-card/modal-add-credit-card.component';
import { BasketStatusComponent } from './components/basket-status/basket-status.component';

@NgModule({
  imports: [
    IconSpriteModule,
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [
    ProductCardComponent,
    ProductGroupComponent,
    ProductComponent,
    ModalProductMenuComponent,
    ModalProfileEditComponent,
    ModalProductComponent,
    ModalBasketComponent,
    ModalConfirmComponent,
    ModalAddCreditCardComponent,
    BasketStatusComponent
  ],
  exports: [
    ProductCardComponent,
    ProductGroupComponent,
    MatDialogModule,
    BasketStatusComponent
  ]
})
export class SharedModule {
}
