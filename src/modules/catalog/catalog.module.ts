import {NgModule} from '@angular/core';
import {CatalogRoutes} from './catalog.routes';
import {HomeComponent} from './pages/home/home.component';
import {IconSpriteModule} from 'ng-svg-icon-sprite';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './pages/product-list/product-list.component';
import {SharedModule} from '../shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CatalogRoutes,
    IconSpriteModule,
    CommonModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule
  ],
  declarations: [
    HomeComponent,
    ProductListComponent
  ]
})
export class CatalogModule {
}
