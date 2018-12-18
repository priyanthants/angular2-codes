import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1>
  {{title}}
  </h1>

  <a routerLink="home" routerLinkActive="active">Home</a>
   <a routerLink="about" routerLinkActive="active">Home</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Routing App!'
}
