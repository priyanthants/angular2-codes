import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  template: `
   <form (ngSubmit)="onSubmit(f)" #f="ngForm">
       <input type="text" [(ngModel)]=name name="username"><br/>
       <button type="submit" >Submit</button><br/>
  </form>
  `,
  styles: [`
  .ng-invalid{
    border: 2px solid red;
  }`]
})
export class TemplateDrivenFormComponent {
name="pri";

 onSubmit(form:NgForm){
   console.log(form.value.username);
   console.log(this.name);
 }
}
