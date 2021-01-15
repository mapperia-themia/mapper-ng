import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RibbonComponent } from './ribbon.component';



@NgModule({
    declarations: [RibbonComponent],
    exports: [
        RibbonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class RibbonModule { }
