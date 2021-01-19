import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { BoxedComponent } from './boxed/boxed.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import {SidebarModule} from '../../mapper/components/overlay/sidebar/sidebar.module';
import {SharedModule} from './shared/shared.module';



@NgModule({
  declarations: [DefaultComponent, BoxedComponent, HorizontalComponent],
  exports: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    SharedModule
  ]
})
export class LayoutModule { }
