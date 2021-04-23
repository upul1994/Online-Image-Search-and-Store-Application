import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import  {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { DisplayComponent } from './components/display/display.component';
import { DisplayimageComponent } from './components/displayimage/displayimage.component';
import { ShowsaveimagesComponent } from './components/showsaveimages/showsaveimages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayComponent,
    DisplayimageComponent,
    ShowsaveimagesComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
