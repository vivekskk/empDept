import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../../services/emp';
import { EmpListService } from '../../services/emp-list.service';
import * as moment from 'moment';
import { DataTable, Column, SelectItem } from 'primeng/primeng';
import { MenuModule } from 'primeng/menu';
import { Message, MenuItem } from 'primeng/components/common/api';

class addEmployee implements Employee {
  constructor(public firstName?, public lastName?, public dept?) { }
}

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  public role;
  public selectedRole = [];
  private items: MenuItem[];
  public deleteBtn: boolean = true;
  public displayModelWindow: boolean;
  public employee: Employee = new addEmployee();
  public selectedEmployee: Employee;
  public newEmployee: boolean;
  public employeesData: Employee[] = [];

  constructor(private employeeService: EmpListService) { }


  ngOnInit() {


    this.role = [
      { name: 'HR', value: 'HR' },
      { name: 'Finance', value: 'Finance' },
      { name: 'Admin', value: 'Admin' },
    ];

    this.role.map((item) => this.selectedRole.push(item));


    this.items = [
      { label: 'Employees', routerLink: ['/home'] },
      { label: 'Department', routerLink: ['/dept'] }
    ];


    this.employeesData = this.employeeService.getEmployeesDept();
    if (this.employeesData.length == 0) {
      this.employeeService.getEmployeesDefault().then(employees => this.employeesData = employees);
      setTimeout(() => {
        this.employeeService.empData = this.employeesData;
      }, 1000);
    }
  }

  public employeeAdd() {
    this.newEmployee = true;
    this.deleteBtn = false;
    this.employee = new addEmployee();
    this.displayModelWindow = true;
  }

  public employeeSave() {
    if (this.newEmployee)
      this.employeesData.push(this.employee);
    else
      this.employeesData[this.findSelectedEmpIndex()] = this.employee;
    this.employee = null;
    this.displayModelWindow = false;
    this.employeesData = this.employeesData.slice();
  }

  public employeeDelete() {
    this.employeesData.splice(this.findSelectedEmpIndex(), 1);
    this.employee = null;
    this.displayModelWindow = false;
    this.employeesData = this.employeesData.slice();
  }


  public onRowSelect(event) {
    this.newEmployee = false;
    this.deleteBtn = true;
    this.employee = this.cloneEmp(event.data);
    this.displayModelWindow = true;
    console.log(this.employeesData);
  }

  public cloneEmp(c: Employee): Employee {
    let employee = new addEmployee();
    for (let prop in c) {
      employee[prop] = c[prop];
    }
    return employee;
  }

  public findSelectedEmpIndex(): number {
    return this.employeesData.indexOf(this.selectedEmployee);
  }

}
