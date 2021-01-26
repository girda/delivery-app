import {NgModule} from '@angular/core';
import {CatalogRoutes} from './catalog.routes';
import {HomeComponent} from './pages/home/home.component';
import {IconSpriteModule} from 'ng-svg-icon-sprite';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './pages/product-list/product-list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CatalogRoutes,
    IconSpriteModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    ProductListComponent
  ]
})
export class CatalogModule {
}
