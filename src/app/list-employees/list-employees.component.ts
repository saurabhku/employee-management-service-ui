import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmsService } from '../service/ems.service';
import { Employee } from '../model/employee';
import { Observable, of } from 'rxjs';
import { Location } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@Component({
  selector: 'list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  employeeObservable : Observable<Employee[]>;
  employees : Employee[] = new Array();
  errorMsg : string = "";

  constructor(private employeeService:EmsService,private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeObservable = this.employeeService.getEmployee();
    this.employeeObservable.subscribe(employeeList => this.employees = employeeList,
    error => this.errorMsg= error);
  }

  settings = {
    actions: {
      add: false,
      delete: false,
      edit: false
      },
    columns: {
      employeeId: {
        title: 'Employee Id',
        filter: true
      },
      name: {
        title: 'Name',
        filter: true,
        sort: true
      },
      salary: {
        title: 'Salary',
        filter: true,
        sort: true
      },
      hireDate: {
         title: 'Hire Date',
         filter: true
       },
    }

  }
}
