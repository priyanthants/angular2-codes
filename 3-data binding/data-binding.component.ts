import { Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
{{title}}
<input type="text" value="title">
<input type="text" value="{{title}}">
<input type="text" [value]="title">
<input type="text" [(ngModel)]="title">
  `,
  styles: []
})
export class DataBindingComponent {

 title = 'priyanthan';
}
