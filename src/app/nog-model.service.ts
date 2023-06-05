import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IObject } from './ng-model-form/ng-model-form.component';

@Injectable({
  providedIn: 'root'
})
export class NogModelService {

  constructor(private http: HttpClient) {

  }
  url = "http://localhost:5000"

  getAllEmp() {
    return this.http.get(this.url + "/getAllCustomer");
  }
  getById(id: number) {
    return this.http.get(this.url + `/getCustomerById/` + id);
  }
  postData(data:IObject[]){
    console.log(data,"service");
    return this.http.post(this.url+"/postData",data);
  }
  updateData(id:number,data:IObject[]){
    return this.http.put(this.url+`/updateDataById/${id}`,data);
  }
  deleteData(id:number,data:string){
    return this.http.put(this.url+`/deleteDataById/${id}`,data)
  }
}