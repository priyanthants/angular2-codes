import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms'
import {composeAsyncValidators} from "@angular/forms/src/directives/shared";

@Component({
  selector: 'app-data-driven-form',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
          <input type="text" formControlName="name" >
  
       <button type="submit" [disabled]="!myForm.valid">Submit</button>
  </form>
  `,
  styles: []
})
export class DataDrivenFormComponent {

  myForm: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.myForm = formBuilder.group({
      'name': ['pri',[Validators.required,Validators.pattern("[0-9]")]]
    })
  }

  onSubmit() {
    console.log(this.myForm.value);
  }


}
