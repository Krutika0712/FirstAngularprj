import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalcuatorComponent } from './calcuator/calcuator.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

// here define route link 
const routes: Routes = [
  {path:'login',component:LoginComponent }, 
  {path:'cal',component:CalcuatorComponent},
  {path:'stlist',component:StudentListComponent},
  {path:'register',component:StudentAddComponent}, 
  {path:'stedit/:id',component:StudentEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
