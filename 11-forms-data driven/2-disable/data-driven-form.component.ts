import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-data-driven-form',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
       <input type="text" formControlName="name"><br/>
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
      name: new FormControl('pri',Validators.required),
      'password': new FormControl('',[Validators.pattern("[0-9]"),Validators.required])
    })
  }

  onSubmit() {
    console.log(this.myForm.value);
  }


}
