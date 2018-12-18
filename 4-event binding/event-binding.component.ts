import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <p>
      <button (click)="onclicked()">click me</button>
    </p>
  `,
  styles: []
})
export class EventBindingComponent  {

 

onclicked(){
  alert("clicked");
}
}
