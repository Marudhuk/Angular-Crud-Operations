import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpService } from '../emp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  employeeList: any;
  employeeById: any;
  id:any;
  isVisible=false;
  constructor(private fb: FormBuilder, private service: EmpService, private route: ActivatedRoute,private router:Router) { }
  reactiveForm = this.fb.group({
    empname: ['', [Validators.required, Validators.minLength(4)]],
    age: ['', [Validators.pattern("^[0-9]+$"), Validators.required]],
    email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]]
  })

  ngOnInit() {
    this.getData();
    this.getEmployeeById();
  }
  // onSubmit() {
  //   this.list=this.reactiveForm.value
  //   console.log(this.list);
  // }
  getData() {
    this.service.getAllEmp().subscribe(data => {
      this.employeeList = data;
    })
  }
  getEmployeeById() {
    this.id = this.route.snapshot.params['id']
    this.service.getById(this.id).subscribe(data => {
      this.employeeById = data;
      console.log(this.employeeById, "hiiiiiiiiii");
      this.reactiveForm.patchValue(this.employeeById?.[0])
    })
  }

  postData() {
    let list = this.reactiveForm.value
    console.log(list, "hiiiiiiiiiiii");
    this.service.postData(list).subscribe(data => {
      console.log(data, "Posteed");
    })
    this.getData();
    this.reactiveForm.reset();
    this.router.navigate(['employeeList']);
  }

  updateData(){
    let list=this.reactiveForm.value
    this.service.updateData(this.id,list).subscribe(data=>{
      console.log(data,"updated");
    })
    this.reactiveForm.reset();
    this.router.navigate(['employeeList']);
  }

  get controls() {
    return this.reactiveForm.controls
  }
}
