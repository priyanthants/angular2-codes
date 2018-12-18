import {Component,OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-user',
  template: `
    <p>
      user Works!
      <br/>{{id1}}
      <br/>{{id2}}
    </p>
  `,
  styles: []
})
export class UserComponent implements OnDestroy{

  id1: number;
  id2: number;
  private subscription:Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription=activatedRoute.params.subscribe(
      (data: any) => this.id1 = data['id']
    );

    //it will not observe
    this.id2=activatedRoute.snapshot.params['id'];
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
