import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding-output',
  template: `
    <p>
     <button (click)="onclicked()">click me</button>
    </p>
  `,
  styles: []
})
export class EventBindingOutputComponent {

  @Output() clicked = new EventEmitter<string>();

  onclicked() {
    this.clicked.emit('data pass to calling component');
  }

}
