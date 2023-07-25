
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  message:string;
username:string;
password:string="";
age :number=0;
result:boolean=false;
constructor(){
  this.username="";
  this.age=10;
}
ngOnInit(): void {
  
}
Login(){
  console.log("Username"+this.username+"password"+this.password)
  this.message =" Username"+ this.username+" Password"+ this.password
}
}

