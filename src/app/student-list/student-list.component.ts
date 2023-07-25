import { Component,OnInit } from '@angular/core';
import { Student } from 'src/Models/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
s:Student;
students:Student[]=[];
  constructor(private studentservice:StudentService){
    this.s={sid:0,sname:"",marks:0,DOB:new Date('09/04/2000')}
  }
  ngOnInit(): void {
    this.students=this.studentservice.getAllStudent();
  }
  Delete(id:number)
  {
    this.studentservice.delete(id);
    console.log("Record deleted");
        
  }
}
