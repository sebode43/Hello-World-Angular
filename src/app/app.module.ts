import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"; //cannot do two-way binding without the forms module
import {HttpClientModule} from "@angular/common/http"; //have to use this one in order to use HTTPClient
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
