import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmsService } from '../service/ems.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-get-employee-info',
  templateUrl: './get-employee-info.component.html',
  styleUrls: ['./get-employee-info.component.css']
})
export class GetEmployeeInfoComponent implements OnInit {

  employee: Employee;
  employeeId: number;
  employeeObservable : Observable<Employee>;
  errorMsg: string= "";

  constructor(private employeeService:EmsService,  private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.employeeId = +this.route.snapshot.paramMap.get('employeeid');
    this.employeeObservable = this.employeeService.getEmployeeById(this.employeeId);
    this.employeeObservable.subscribe(employeeResult => this.employee = employeeResult, error => this.errorMsg = error);

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
      },
      name: {
        title: 'Name',

      },
      salary: {
        title: 'Salary',

      },
      hireDate: {
         title: 'Hire Date',
       },
    }

  }
}
