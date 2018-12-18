import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms'

@Component({
  selector: 'app-data-driven-form',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
    <div formArrayName="names">
          <input type="text" formControlName="0" >
    </div>
        <button type="button" (click)="add()">Add</button>
       <button type="submit">Submit</button>
  </form>
  `,
  styles: []
})
export class DataDrivenFormComponent {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'names': new FormArray([new FormControl()])
    })
  }

  add() {


  }

  onSubmit() {
    console.log(this.myForm.value);
  }


}
