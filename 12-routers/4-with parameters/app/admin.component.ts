import {Component,OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-admin',
  template: `
    <p>
      admin Works!
      {{id}}{{name}}
    </p>
  `,
  styles: []
})
export class AdminComponent implements OnDestroy {

  id: number;
  name: string;
   private subscription:Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(
      (data: any) => {
        this.id = data['id'];
        this.name = data['name'];
      });
  }

    ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
