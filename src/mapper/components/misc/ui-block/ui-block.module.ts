import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiBlockComponent } from './ui-block.component';



@NgModule({
    declarations: [UiBlockComponent],
    exports: [
        UiBlockComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UiBlockModule { }
