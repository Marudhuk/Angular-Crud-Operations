import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpService } from '../emp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NestSerService } from '../nest-ser.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  employeeList: any;
  employeeById: any;
  id: any;
  isVisible = true;
  constructor(private fb: FormBuilder, private service: NestSerService, private route: ActivatedRoute, private router: Router) { }

  employeeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]],
    department: ['', [Validators.required]],
    address: ['', [Validators.required]],
  })

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getAllEmployee().subscribe((data: any) => {
      this.employeeList = data.data;
      console.log(data.message);
    })
  }

  // getEmployeeById(id: number) {
  //   this.service.getEmployee(id).subscribe((data: any) => {
  //     this.employeeById = data.data;
  //     console.log(this.employeeById, "EmployeeById");
  //     this.employeeForm.patchValue(this.employeeById)
  //   })
  // }

  addEmployee() {
    let list = this.employeeForm.value
    this.service.addEmployee(list).subscribe((data:any) => {
      console.log(data.message);
      this.getData();
    })
    this.employeeForm.reset();
  }

  updateData() {
    this.isVisible = true;
    let list = this.employeeForm.value
    this.service.updateEmployee(this.id, list).subscribe((data:any) => {
      console.log(data.message);
      this.getData();
    })
    this.employeeForm.reset();
  }

  editData(id: number) {
    this.id = id;
    this.employeeList.filter((e: any) => {
      if (e.id == id) {
        this.employeeForm.patchValue(e)
      }
    })
    this.isVisible = false;
  }

  deleteData(id: number) { 
    this.service.deleteEmployee(id).subscribe((data:any) => {
      console.log(data.message);
      this.getData();
    })
  }

  get controls() {
    return this.employeeForm.controls
  }
}
