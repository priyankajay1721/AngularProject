import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //varials & property
  title = 'display user list';
  users:any;
  constructor(private http:HttpClient){
   
  }

  //method: event of angular-initialisation
  ngOnInit(){
      //call getusers method that we define on line no 24
    this.getUsers();
  }

  //method-getusers
  getUsers(){
    //this will call server side url (api-end points)
    this.http.get('https://localhost:7048/api/Users').subscribe(res=>{
       //setting data from res(server data )to users variable that will created on line no 12
      this.users=res;
    },err=>{
      console.log(err);
    })
  }
}
