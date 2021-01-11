import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { AnimatedComponent } from './animated/animated.component';
import { IconComponent } from './icon/icon.component';



@NgModule({
    declarations: [DefaultComponent, AnimatedComponent, IconComponent],
  exports: [
    DefaultComponent,
    AnimatedComponent,
    IconComponent,
  ],
    imports: [
        CommonModule
    ]
})
export class ButtonModule { }
