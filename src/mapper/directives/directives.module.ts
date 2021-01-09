import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskDirective } from './mask.directive';
import { FilterKeyDirective } from './filter-key.directive';
import { TooltipDirective } from './tooltip.directive';



@NgModule({
  declarations: [MaskDirective, FilterKeyDirective, TooltipDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
