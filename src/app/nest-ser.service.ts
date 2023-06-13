import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NestSerService {

  constructor(private http:HttpClient) { }
  url:string = "http://localhost:2000/employee";

  getAllEmployee() {
    return this.http.get(this.url+'/getAllEmployees');
  }

  getEmployee(id:number) {
    return this.http.get(this.url+"/getEmployee/"+id);
  }

  addEmployee(employee:any){
    return this.http.post(this.url+"/addEmployee",employee);
  }

  updateEmployee(id:number,employee:any){
    return this.http.put(this.url+`/updateEmployee/${id}`,employee);
  }

  deleteEmployee(id:number){
    return this.http.delete(this.url+"/deleteEmployee/"+id);
  }

}
