import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidebarModule} from '../mapper/components/overlay/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SidebarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
