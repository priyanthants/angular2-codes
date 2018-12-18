import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <p>
      admin Works!
    </p>
    
  <a routerLink="home" routerLinkActive="active">Home</a>
  <a routerLink="about" routerLinkActive="active">About</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
