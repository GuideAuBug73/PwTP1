import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DetailsPage } from '../details/details';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { API } from '../../app/tmdb';
import { AsyncPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
results:Observable<Result[]>;
query:string;
pushPage:any;
test:Result[];
  constructor(public http: HttpClient) {
    this.results=Observable.of([]);
    this.query="";
    this.pushPage=DetailsPage;
    this.test=fakeresults;
  }
  getMovies():void{
   // this.results=this.query ? fakeresults:[];
   this.results=this.query ? this.fetchResult():Observable.of([]);
  }
  fetchResult():Observable<Result[]>{
      return this.http.get<Result[]>('http://api.themoviedb.org/3/search/movie/',{
        params:{ api_key: API, query:this.query, language:"fr"}
      }).pluck("results");
  }
}

export interface Result{
  id:number;
  title:string;
  image:string;
  overview:string;
  date:number;
  vote_count:number;
  vote_average:number;
}

const fakeresults: Result[]=[
  {id:1,overview:"blabla",vote_count:500,vote_average:100,title:'Back to the futur',date:1789,image:"https://vignette.wikia.nocookie.net/wikidoublage/images/4/45/BTTF.jpg/revision/latest?cb=20110319225157&path-prefix=fr"},
  {id:2,overview:"blablabla",vote_count:400,vote_average:99,title:'test',date:1997,image:"https://vignette.wikia.nocookie.net/wikidoublage/images/4/45/BTTF.jpg/revision/latest?cb=20110319225157&path-prefix=fr"}
]