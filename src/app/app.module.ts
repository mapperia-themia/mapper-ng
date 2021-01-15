import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidebarModule} from '../mapper/components/overlay/sidebar/sidebar.module';
import {ButtonModule} from '../mapper/components/button/button.module';
import {DividerModule} from '../mapper/components/panel/divider/divider.module';
import {FlagModule} from '../mapper/components/misc/flag/flag.module';
import {HeaderModule} from '../mapper/components/panel/header/header.module';
import {IconModule} from '../mapper/components/misc/icon/icon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    DividerModule,
    FlagModule,
    HeaderModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
