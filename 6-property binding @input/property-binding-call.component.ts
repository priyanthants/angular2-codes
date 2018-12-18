import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-call',
  template: `
    <p>
      <app-property-binding [result]="10"></app-property-binding>
    </p>
  `,
  styles: []
})
export class PropertyBindingCallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
