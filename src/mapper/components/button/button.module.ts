import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { AnimatedComponent } from './animated/animated.component';
import { IconComponent } from './icon/icon.component';
import { IconLabelComponent } from './icon-label/icon-label.component';
import { GroupComponent } from './group/group.component';



@NgModule({
    declarations: [DefaultComponent, AnimatedComponent, IconComponent, IconLabelComponent, GroupComponent],
  exports: [
    DefaultComponent,
    AnimatedComponent,
    IconComponent,
    IconLabelComponent,
    GroupComponent,
  ],
    imports: [
        CommonModule
    ]
})
export class ButtonModule { }
