import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { EmailValidator } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppComponent } from './app.component';
import { NgModelFormComponent } from './ng-model-form/ng-model-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path:'',redirectTo:'second',pathMatch:'full'},
  {path:"second",component:SecondComponent},
  {path:"second/:id",component:SecondComponent},
  {path:"employee/:id",component:EmployeeComponent},
  {path:"employeeList",component:EmployeeListComponent},
  {path:"ngModel",component:NgModelFormComponent},
  {path:"employeeForm",component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
