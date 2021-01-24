import {NgModule} from '@angular/core';
import {CatalogRoutes} from './catalog.routes';
import {HomeComponent} from './pages/home/home.component';
import {IconSpriteModule} from "ng-svg-icon-sprite";

@NgModule({
  imports: [
    CatalogRoutes,
    IconSpriteModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    CatalogRoutes,
    HomeComponent
  ]
})
export class CatalogModule {
}
