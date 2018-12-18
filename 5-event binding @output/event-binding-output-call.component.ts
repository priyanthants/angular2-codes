import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-output-call',
  template: `
    <p>
      <app-event-binding-output (clicked)="onClickedMethod($event)"></app-event-binding-output>
    </p>
  `,
  styles: []
})
export class EventBindingOutputCallComponent {

 onClickedMethod(value : string){
            alert(value)
         }

}
