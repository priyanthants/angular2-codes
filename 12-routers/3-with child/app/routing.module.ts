import {NgModule} from '@angular/core';
import { RouterModule} from "@angular/router";
import {AdminRoutingModule} from "./admin/admin-routing.module";
import {UserRoutingModule} from "./user/user-routing.module";


@NgModule({
  declarations: [],
  imports: [
    AdminRoutingModule,
    UserRoutingModule
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}

