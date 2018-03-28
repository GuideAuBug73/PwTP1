import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModel } from '@angular/forms';
import { DetailsPage } from '../details/details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
results:Result[];
query:string;
pushPage:any;
test:Result[];
  constructor(public navCtrl: NavController) {
    this.results=[];
    this.query="";
    this.pushPage=DetailsPage;
    this.test=fakeresults;
  }
getMovies():void{
this.results=this.query ? fakeresults:[];
}
}

export interface Result{
  title:string;
  author:string;
  date:number;
  image:string;
}

const fakeresults: Result[]=[
  {title:'Back to the futur',author:'toto',date:1789,image:"https://vignette.wikia.nocookie.net/wikidoublage/images/4/45/BTTF.jpg/revision/latest?cb=20110319225157&path-prefix=fr"},
  {title:'test',author:'titi',date:1997,image:"https://vignette.wikia.nocookie.net/wikidoublage/images/4/45/BTTF.jpg/revision/latest?cb=20110319225157&path-prefix=fr"}
]