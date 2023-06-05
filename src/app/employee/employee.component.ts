import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeDetail:any;
  employeeId:any;
  constructor(private actiavtedRoute: ActivatedRoute, private service: EmpService) { }
  ngOnInit() {
    this.actiavtedRoute.params.subscribe(params => {
      this.employeeId = params['id'];
      this.getById(this.employeeId);
    })
  }
  getById(id:number){
    this.service.getById(id).subscribe(data=>{
      console.log(data);
      this.employeeDetail=data
    })
  }
}



