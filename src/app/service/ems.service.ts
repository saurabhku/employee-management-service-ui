import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmsService {

  private getEmployeeUrl = 'http://localhost:9000/employee'; 

  constructor(private http:HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.getEmployeeUrl)
      .pipe(catchError(this.errorHandler))
  }  

  getEmployeeById(employeeId: number) : Observable<Employee> {
    return this.http.get<Employee>(this.getEmployeeUrl+'/'+employeeId)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler( error: HttpErrorResponse) {
    return throwError( "Something Went Wrong !! Please Retry After Some Time ");
    
  }
}