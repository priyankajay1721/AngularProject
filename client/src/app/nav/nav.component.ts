import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  model : any = {};
   
  login(){

    console.log("loin method called");
    console.log(this.model);
  }

}
