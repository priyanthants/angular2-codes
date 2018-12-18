import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-data-driven-form',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
       <input type="text" formControlName="name"><br/>
       <input type="text" formControlName="password"><br/>
       <button type="submit" >Submit</button>
  </form>
  `,
  styles: []
})
export class DataDrivenFormComponent {

  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl(),
      'password': new FormControl()
    })
  }

  onSubmit() {
    console.log(this.myForm.value);
  }


}
