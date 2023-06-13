import { Component, ViewChild ,AfterViewInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpService } from '../emp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements AfterViewInit{
  employeeList: any;
  employeeById: any;
  id:any;
  isVisible=true;
  @ViewChild(EmployeeListComponent) childComponent!:EmployeeListComponent;
  constructor(private fb: FormBuilder, private service: EmpService, private route: ActivatedRoute,private router:Router) { }
 
  reactiveForm = this.fb.group({
    empname: ['', [Validators.required, Validators.minLength(4)]],
    age: ['', [Validators.pattern("^[0-9]+$"), Validators.required]],
    email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]]
  })
  name="Goutham";

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.childComponent.empName="Saroo";
    // }, 1000);
  }

  ngOnInit() {
    this.getData();
    this.getEmployeeById();
  }
  
  changeChildData(employee:EmployeeListComponent){
    employee.templateRef="Marudhu"
  }
  

  getData() {
    this.service.getAllEmp().subscribe(data => {
      this.employeeList = data;
    })
  }
  getEmployeeById() {
    this.id = this.route.snapshot.params['id']
    this.service.getById(this.id).subscribe(data => {
      this.employeeById = data;
      this.reactiveForm.patchValue(this.employeeById?.[0])
      this.isVisible=false;
      console.log(this.isVisible,'Visible');
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
    this.isVisible=true;
    console.log(this.isVisible,'Visible');
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
