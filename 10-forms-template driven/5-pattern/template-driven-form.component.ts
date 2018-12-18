import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  template: `
   <form (ngSubmit)="onSubmit(f)" #f="ngForm">
       <input type="text"  pattern="[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"><br/>
       <button type="submit" >Submit</button><br/>
  </form>
  `,
  styles: []
})
export class TemplateDrivenFormComponent {

 onSubmit(form:NgForm){
   console.log(form.value.email);
 }
}
