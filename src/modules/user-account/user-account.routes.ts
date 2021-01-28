import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserAccountComponent} from './user-account.component';
import {AddressesComponent} from './pages/addresses/addresses.component';
import {CreditCardsComponent} from './pages/credit-cards/credit-cards.component';
import {FeedbackComponent} from './pages/feedback/feedback.component';
import {OrdersComponent} from './pages/orders/orders.component';
import {PromoCodesComponent} from './pages/promo-codes/promo-codes.component';
import {SupportComponent} from './pages/support/support.component';
import {UserAccountPagesLayoutComponent} from './layout/user-account-pages-layout/user-account-pages-layout.component';


const routes: Routes = [
  {path: '', component: UserAccountComponent},
  {path: '', component: UserAccountPagesLayoutComponent, children: [
      {path: 'addresses', component: AddressesComponent, data: {title: 'Мои адреса'}},
      {path: 'credit-card', component: CreditCardsComponent, data: {title: 'Мои карты'}},
      {path: 'feedback', component: FeedbackComponent, data: {title: 'Мой отзыв'}},
      {path: 'orders', component: OrdersComponent, data: {title: 'Мои заказы'}},
      {path: 'promo-codes', component: PromoCodesComponent, data: {title: 'Мои промо коды'}},
      {path: 'support', component: SupportComponent, data: {title: 'Поддержка'}}
    ]}

];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserAccountRoutes {
}
