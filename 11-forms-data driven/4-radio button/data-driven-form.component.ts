import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-data-driven-form',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <div *ngFor="let g of gender">
          <input type="radio" formControlName="gender" [value]="g">{{g}}
      </div>
       <button type="submit">Submit</button>
  </form>
  `,
  styles: []
})
export class DataDrivenFormComponent {

  myForm: FormGroup;
gender=["male","female"];
  constructor() {
    this.myForm = new FormGroup({
      'gender': new FormControl('male')
    })
  }

  onSubmit() {
    console.log(this.myForm.value.gender);
  }


}
