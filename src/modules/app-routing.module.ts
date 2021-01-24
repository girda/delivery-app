import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalog/home',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {
}
