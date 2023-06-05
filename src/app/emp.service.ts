import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) {

  }
  url = "http://localhost:4000"

  getAllEmp() {
    return this.http.get(this.url + "/getAllEmployee");
  }
  getById(id: number) {
    return this.http.get(this.url + `/getEmployeeById/` + id);
  }

  postData(data: any) {
    console.log(data, "dataaa in service");
    return this.http.post(this.url + "/postData", data);
  }

  updateData(id: number, data: any) {
    return this.http.put(this.url + `/updateDataById/${id}`, data)
  }
  deleteData(id:number){
    return this.http.put(this.url+`/deleteDataById`,{id:id})
  }

}
