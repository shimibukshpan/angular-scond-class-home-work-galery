import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputsComponent } from './inputs/inputs.component';
import { DisplayImagesComponent } from './display-images/display-images.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    DisplayImagesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
