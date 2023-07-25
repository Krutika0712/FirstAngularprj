import { Injectable,OnInit } from '@angular/core';
import { Student } from 'src/Models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit{
  s:Student;
  stid:number;
  students:Student[]=[
    {sid:1,sname:"Krutika",marks:55,DOB:new Date('09/04/2000')}
  ,{sid:2,sname:"Rutika",marks:66,DOB:new Date('04/04/2000')},
  {sid:3,sname:"Apoorva",marks:44,DOB:new Date('09/04/2000')}
  ];
  constructor() { }
ngOnInit(): void {
  
 }
  getAllStudent():any
  {
    return this.students;
  }
  AddNewStudent(s:Student){
   this.students.push(s);
  }
  FindStudent(id:number):any{
    this .getAllStudent();
    this.s=this.students.find(x=>x.sid==id)
    return this.s;

  }
  update(s:Student)
  {
    this.getAllStudent();
    this.stid=s.sid;
    
    delete this.students[this.stid];
    
  }
  delete(id:number)
  {
     for(let i = 0; i < this.students.length; ++i){
      if (this.students[i].sid === id) {
          this.students.splice(i,1);
          this.getAllStudent();
      }
  }

 }
}
