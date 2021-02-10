import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActionComponent } from './action/action.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { PreviewComponent } from './preview/preview.component';
import { ControlComponent } from './control/control.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '../../comps/forms/forms.module';



@NgModule({
    declarations: [ToolbarComponent, NavbarComponent, ActionComponent, TaskbarComponent, PreviewComponent, ControlComponent],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    ActionComponent,
    ControlComponent,
    PreviewComponent,
    TaskbarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class LayoutHelperModule { }
