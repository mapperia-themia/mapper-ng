import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfOnDomDirective } from './if-on-dom.directive';



@NgModule({
  declarations: [IfOnDomDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
