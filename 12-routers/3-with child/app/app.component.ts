import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1>
  {{title}}
  </h1>

  <a routerLink="admin" routerLinkActive="active">Admin</a>
   <a routerLink="user" routerLinkActive="active">User</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Routing App!'
}
