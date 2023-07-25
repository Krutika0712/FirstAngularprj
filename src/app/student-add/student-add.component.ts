import { Component,OnInit } from '@angular/core';
import { Student } from 'src/Models/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit{
s:Student;
  constructor(private studentservices:StudentService){
    this.s={sid:0,sname:"",marks:0,DOB:new Date('01/01/0001')}
  }
  ngOnInit(): void {
    
  }
  register(){
    this.studentservices.AddNewStudent(this.s)
    console.log(this.s)
  }
}
