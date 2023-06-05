import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service:EmpService ,private route:Router) {
    
  }
  employeeList:any;

  ngOnInit(){
    this.getData();
  }
  getData(){
    this.service.getAllEmp().subscribe(data=>{
      console.log(data);
      this.employeeList=data;
    })
  }

  goToDetails(id:number){
    this.route.navigate(['/employee',id])
  }


  updateData(id:number){
    this.route.navigate(['/second',id])
  }

  deleteDataById(id:number,data:string){
    console.log(id,'idddddddd');
    this.service.deleteData(id).subscribe(data=>{
      console.log(data,'Deleted'); 
      this.getData();
    })
  }

  viewDetails(id:number){
    this.route.navigate(['/employee',id])
  }

}
