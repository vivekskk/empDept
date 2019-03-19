import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../../services/emp';
import { EmpListService } from '../../services/emp-list.service';
import * as moment from 'moment';
import { DataTable, Column } from 'primeng/primeng';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/components/common/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  private items: MenuItem[];
  public employees: Employee[];

  constructor(private employeeService: EmpListService) { }

  ngOnInit() {
    this.items = [
      { label: 'Employees', routerLink: ['/home'] },
      { label: 'Department', routerLink: ['/dept'] }
    ];
    if (this.employeeService.empData.length == 0)
      this.employeeService.getEmployeesDefault().then(employees => this.employees = employees);
      else
      this.employees = this.employeeService.empData;
    setTimeout(() => {
      this.employeeService.empData = this.employees;
    }, 1000);
  }

}
