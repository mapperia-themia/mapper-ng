import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from './text-field/text-field.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [TextFieldComponent],
  exports: [
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
