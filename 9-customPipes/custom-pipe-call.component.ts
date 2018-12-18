import { Component} from '@angular/core';

@Component({
  selector: 'app-custom-pipe-call',
  template: `
    <p>
      {{x1 | double}}<br/>
      {{x1 | multiple:5}}<br/>
    </p>

    <button (click)="addnew()">add</button>
    {{food |filter:'ea'}}
 

    
  `,
  styles: []
})
export class CustomPipeCallComponent {
  x1:number=2;
  food=['milk','bread','beans'];

  addnew(){
    this.food.push("eat");
    console.log(this.food);
  }

}
