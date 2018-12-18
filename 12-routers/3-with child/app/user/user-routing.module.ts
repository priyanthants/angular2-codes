import { NgModule } from '@angular/core';
import {UserComponent} from "./user.component";
import {Routes, RouterModule} from "@angular/router";
import {UserHomeComponent} from "./user-home.component";
import {UserAboutComponent} from "./user-about.component";

const appRoutes: Routes = [{ path: 'user', component: UserComponent,
  children: [
    { path: 'home', component: UserHomeComponent },
    { path: 'about', component:UserAboutComponent  }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [UserComponent,UserHomeComponent,UserAboutComponent],
  exports: [RouterModule]
})
export class UserRoutingModule { }
