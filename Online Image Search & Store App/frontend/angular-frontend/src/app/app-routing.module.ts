import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplayimageComponent} from "./components/displayimage/displayimage.component";
import {HomeComponent} from "./components/home/home.component";
import {ShowsaveimagesComponent} from "./components/showsaveimages/showsaveimages.component";
import {DisplayComponent} from "./components/display/display.component";


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"view",component:DisplayimageComponent},
  {path:"show",component:ShowsaveimagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
