import { Component } from '@angular/core';

@Component({
  selector: 'app-calcuator',
  templateUrl: './calcuator.component.html',
  styleUrls: ['./calcuator.component.css']
})
export class CalcuatorComponent {
firstnumber:number;
secondnumber:number;
result:number;
constructor(){

}

 Add(){
     this.result=this.firstnumber+this.secondnumber;
 }
}
