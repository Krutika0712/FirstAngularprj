import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CalcuatorComponent } from './calcuator/calcuator.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from'@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalcuatorComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
