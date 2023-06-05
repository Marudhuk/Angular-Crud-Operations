import { Component, OnInit } from '@angular/core';
import { NogModelService } from '../nog-model.service';

export interface IObject{
  name:string;
  age:number;
  email:string;
}
@Component({
  selector: 'app-ng-model-form',
  templateUrl: './ng-model-form.component.html',
  styleUrls: ['./ng-model-form.component.css']
})

export class NgModelFormComponent implements OnInit,IObject {

  name = '';
  age = 0;
  email ='';
  id!:number;
  employeeList:any;
  customerById:any;
  visible=false;
  constructor(private ngModelSer:NogModelService){}
 
  ngOnInit() {
    this.getData();
  };

  getData(){
    this.ngModelSer.getAllEmp().subscribe(data=>{
      console.log(data);
      this.employeeList=data;
    })
  }
  editData(id:number){
    this.visible=true;
    this.id=id;
    this.ngModelSer.getById(id).subscribe((data)=>{
    console.log(data,"By Id");
    this.customerById=data
    if(this.customerById.length){
      this.name=this.customerById[0].name,
      this.age= this.customerById[0].age,
      this.email=this.customerById[0].email
    }    
   })
  }
  updateData(){
    this.visible=false;
    const newUser: IObject[]= [{
      name: this.name,
      age: this.age,
      email: this.email
    }];
    console.log(newUser);
    this.ngModelSer.updateData(this.id,newUser).subscribe();
    this.name='';
    this.age=0;
    this.email='';
    this.getData();
  }

  deleteDataById(id:number,data:string){
    this.ngModelSer.deleteData(id,data).subscribe();
    this.getData();
  }
  onSubmit(){
    const newUser: IObject[]= [{
      name: this.name,
      age: this.age,
      email: this.email
    }];
    console.log(newUser);
    this.ngModelSer.postData(newUser).subscribe();
    // this.name='';
    // this.age=0;
    // this.email='';
    // this.getData();
  }
}
