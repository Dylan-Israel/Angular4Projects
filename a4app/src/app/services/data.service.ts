import { Injectable } from '@angular/core';
//Http is a service and must be injected
import { Http } from '@angular/http';
//Allows us to map to JSON
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Data service connected...');
  }

getPosts(){
 return this.http.get('http://jsonplaceholder.typicode.com/posts').map(res => res.json());
}

}
