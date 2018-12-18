import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-data-driven-form',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <div formGroupName="nameGrp">
       <input type="text" formControlName="name"><br/>
      </div>
       <input type="text" formControlName="password"><br/>
       <button type="submit" [disabled]="!myForm.valid">Submit</button>
  </form>
  `,
  styles: []
})
export class DataDrivenFormComponent {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      nameGrp:new FormGroup({name: new FormControl()}),
      'password': new FormControl()
    })
  }

  onSubmit() {
    console.log(this.myForm.value.nameGrp);
  }


}
