import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  template: `
   <form (ngSubmit)="onSubmit(f)" #f="ngForm">
      <div *ngFor="let g of gender">
          <input type="radio" ngModel name="gender" [value]="g">{{g}}
      </div>
      <button type="submit" >Submit</button><br/>
  </form>
  `
})
export class TemplateDrivenFormComponent {

gender=["male","female"];

 onSubmit(form:NgForm){
   console.log(form.value.gender);
 }
}
