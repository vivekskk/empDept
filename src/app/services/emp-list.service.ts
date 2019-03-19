import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Employee } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpListService {
  public empData: any = [];
  constructor(private http: Http) { }

  getEmployeesDefault() {
      return this.http.get('assets/json/empDefault.json')
        .toPromise()
        .then(res => <Employee[]>res.json().data)
  }

  getEmployeesDept() {
    return this.empData;
  }

}
