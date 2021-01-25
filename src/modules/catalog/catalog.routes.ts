import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {ProductListComponent} from './pages/product-list/product-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ProductListComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogRoutes {
}
