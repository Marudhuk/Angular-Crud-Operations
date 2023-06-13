import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { EmpService } from './emp.service';
import { HttpClientModule } from '@angular/common/http';
import { SecondComponent } from './second/second.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModelFormComponent } from './ng-model-form/ng-model-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    EmployeeComponent,
    EmployeeListComponent,
    NgModelFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
