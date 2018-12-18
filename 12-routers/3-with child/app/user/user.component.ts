import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>
      user Works!
    </p>
  <a routerLink="home" routerLinkActive="active">Home</a>
  <a routerLink="about" routerLinkActive="active">About</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
