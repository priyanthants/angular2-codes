import { NgModule } from '@angular/core';
import {AdminHomeComponent} from "./admin-home.component";
import {Routes, RouterModule} from "@angular/router";
import {AdminAboutComponent} from "./admin-about.component";
import {AdminComponent} from "./admin.component";

const appRoutes: Routes = [{ path: 'admin', component: AdminComponent,
  children: [
    { path: 'home', component: AdminHomeComponent },
    { path: 'about', component:AdminAboutComponent  }
    ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AdminComponent,AdminHomeComponent,AdminAboutComponent],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
