import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactiveForms';
  employeeList:any;
  employeeById:any;
  // list:any;
  constructor(private fb: FormBuilder,private service:EmpService) { }
  reactiveForm = this.fb.group({
    firstname: ['',[Validators.required,Validators.minLength(4)]],
    age: ['',[Validators.pattern("[0-9]"),Validators.required]],
    email: ['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
  })

  ngOnInit() {
    this.getData();
  }
  // onSubmit() {
  //   this.list=this.reactiveForm.value
  //   console.log(this.list);
  // }
  getData(){
    this.service.getAllEmp().subscribe(data=>{
      this.employeeList=data;
    })
  }

  postData(){
    let list=this.reactiveForm.value
    console.log(list,"hiiiiiiiiiiii");
    this.service.postData(list).subscribe(data=>{
      console.log(data,"Posteed");
    })
    this.getData();
    this.reactiveForm.reset();
  }

  updateData(id:number){
    this.service.getById(id).subscribe(data=>{
     this.employeeById=data;
     console.log(this.employeeById,"hiiiiiiiiii");
     
    })
      this.reactiveForm.patchValue({
        firstname:this.employeeById.empname,
        age:this.employeeById.age,
        email:this.employeeById.email
      })
   
  }

  deleteData(id:number){}


  // updateValue() {
  //   this.reactiveForm.setValue({
  //     firstname: "Maruthu",
  //     age: '22',
  //     email: "muthu@gmail.,com"
  //   })
  //   // console.log(this.reactiveForm.value,"updated");
  // }
  // patchValue(){
  //   this.reactiveForm.patchValue({
  //     age:'20'
  //   })
  // }



}


