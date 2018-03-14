import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results:Result[];

  constructor(public navCtrl: NavController) {
    this.results=fakeresults;
  }

}

export interface Result{
  title:string;
  author:string;
  date:number;
}

const fakeresults: Result[]=[
  {title:'Back to the futur',author:'toto',date:'1789'},
  {title:'test',author:'titi',date:'1997'}
]
