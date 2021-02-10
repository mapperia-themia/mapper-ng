import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAComponent } from './layout-a/layout-a.component';
import { LayoutBComponent } from './layout-b/layout-b.component';
import { LayoutCComponent } from './layout-c/layout-c.component';
import {LayoutHelperModule} from './layout-helper/layout-helper.module';



@NgModule({
    declarations: [LayoutAComponent, LayoutBComponent, LayoutCComponent],
  exports: [
    LayoutAComponent,
    LayoutBComponent,
    LayoutCComponent
  ],
  imports: [
    CommonModule,
    LayoutHelperModule
  ]
})
export class LayoutModule { }
