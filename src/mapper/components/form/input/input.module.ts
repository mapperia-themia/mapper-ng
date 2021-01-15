import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { MInputComponent } from './m-input/m-input.component';
import { InputWithDdComponent } from './input-with-dd/input-with-dd.component';
import { InputCurrencyComponent } from './input-currency/input-currency.component';



@NgModule({
  declarations: [BasicComponent, MInputComponent, InputWithDdComponent, InputCurrencyComponent],
  exports: [
    MInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InputModule { }
