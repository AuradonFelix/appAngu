import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { WriteComponent } from './write/write.component';
import { WindowComponent } from './window/window.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    WriteComponent,
    WindowComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
