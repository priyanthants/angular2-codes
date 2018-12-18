import { NgModule } from '@angular/core';
import {AboutComponent} from "./about.component";
import {HomeComponent} from "./home.component";
import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }

