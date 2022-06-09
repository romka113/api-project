import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeComponent } from './components/joke/joke.component';
import { FormsModule } from "@angular/forms";
import {HttpClientModule } from "@angular/common/http";
import { KeityklaComponent } from './components/keitykla/keitykla.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    KeityklaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
