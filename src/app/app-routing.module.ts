import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { GetEmployeeInfoComponent } from './get-employee-info/get-employee-info.component';

const routes: Routes = [

  { path: '',  component: ListEmployeesComponent },
  { path: 'employeeinfo/:employeeid',  component: GetEmployeeInfoComponent} 

]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:
  [ RouterModule ]
})
export class AppRoutingModule { }
