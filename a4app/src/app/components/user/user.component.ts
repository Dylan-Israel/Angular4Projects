import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //TypeScript: Creates variables and assigns type
  name:string;
  age:number;
  email:string;
  //Assingned interface/class
  address:Address;
  //Type is an array of strings
  hobbies:string[];
  //Type can change between number to string etc.
  hello:any;
  posts:Post[];
  isEdit:boolean = false;
  //When ever using a service you must inject it as a dependency into the constructor
  //paramName:ImportedServiceName
  constructor(private dataService:DataService) { 
console.log('Constructor ran.')

  }
//Life cycle hook - runs when the component is initialized
//constructor and ngOnInit() both will run and are very similar
 
  ngOnInit() {
    this.name = "John Doe";
    this.age = 30;
    this.email = "example@email.com";
    this.address = {
      street: '100 Street',
      city: 'Boston',
      state: "MA"
    }
    this.hobbies = ["Write code", "YouTube", "Games"];
    //returns an observable not sure what that is
    this.dataService.getPosts().subscribe((posts) =>{
      // console.log(posts);
      this.posts = posts;
    });
  }
//Function
  onClick(){
    console.log('Hello');
    this.hobbies.push('New Hobby');
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  deleteHobby(hobby){
    for(let i = 0; i< this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
          this.hobbies.splice(i,1);
      }
    }
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
}
//TypeScript way of essentially creating a class
interface Address {
    street:string,
    city:string,
    state:string
}
  interface Post{
    id:number,
    title:string,
    body:string,
    userId:number
  }
