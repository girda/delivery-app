import {NgModule} from '@angular/core';

import {IconSpriteModule} from 'ng-svg-icon-sprite';
import {CommonModule} from '@angular/common';
import {UserAccountRoutes} from './user-account.routes';
import {UserAccountComponent} from './user-account.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ListComponent} from './components/list/list.component';
import {SharedModule} from '../shared/shared.module';
import {CreditCardsComponent} from './pages/credit-cards/credit-cards.component';
import {AddressesComponent} from './pages/addresses/addresses.component';
import {OrdersComponent} from './pages/orders/orders.component';
import {PromoCodesComponent} from './pages/promo-codes/promo-codes.component';
import {SupportComponent} from './pages/support/support.component';
import {FeedbackComponent} from './pages/feedback/feedback.component';
import {UserAccountPagesLayoutComponent} from './layout/user-account-pages-layout/user-account-pages-layout.component';

@NgModule({
  imports: [
    UserAccountRoutes,
    IconSpriteModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    UserAccountComponent,
    ProfileComponent,
    ListComponent,
    CreditCardsComponent,
    AddressesComponent,
    OrdersComponent,
    PromoCodesComponent,
    SupportComponent,
    FeedbackComponent,
    UserAccountPagesLayoutComponent
  ]
})
export class UserAccountModule {
}
