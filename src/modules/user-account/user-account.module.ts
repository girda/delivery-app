import {NgModule} from '@angular/core';

import {IconSpriteModule} from 'ng-svg-icon-sprite';
import {CommonModule} from '@angular/common';
import {UserAccountRoutes} from './user-account.routes';
import {UserAccountComponent} from './user-account.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListComponent } from './components/list/list.component';
import {SharedModule} from '../shared/shared.module';

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
    ListComponent
  ]
})
export class UserAccountModule {
}
