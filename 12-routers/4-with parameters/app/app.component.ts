import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1>
  {{title}}
  </h1>
  
    <a routerLink="home" >Home</a>
    <a [routerLink]="['user',id]">User</a>
    <a routerLink="admin" [queryParams]="{id:4,name:'pri'}">Admin</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  id=4;
  title = 'Routing App!'
}
