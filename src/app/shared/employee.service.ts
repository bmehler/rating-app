import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { Employee } from './employee';
import { EmployeeRaw } from './employee-raw';
import { EmployeeFactory } from './employee-factory';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private api = "http://localhost:3000";

  getAll(): Observable<Array<Employee>> {
    return this.http
      .get<EmployeeRaw[]>(`${this.api}/employees`)
      .pipe(
        retry(3),
        map(rawEmployee => rawEmployee
          .map(rawEmployee => EmployeeFactory.fromObject(rawEmployee)).sort((a,b) => b.ratings[0].total - a.ratings[0].total),
        ),
        catchError(this.errorHandler)
      );
  }

  getAllAsc(): Observable<Array<Employee>> {
    return this.http
      .get<EmployeeRaw[]>(`${this.api}/employees`)
      .pipe(
        retry(3),
        map(rawEmployee => rawEmployee
          .map(rawEmployee => EmployeeFactory.fromObject(rawEmployee)).sort((a,b) => a.ratings[0].total - b.ratings[0].total),
        ),
        catchError(this.errorHandler)
      );
  }

  getAllDesc(): Observable<Array<Employee>> {
    return this.http
      .get<EmployeeRaw[]>(`${this.api}/employees`)
      .pipe(
        retry(3),
        map(rawEmployee => rawEmployee
          .map(rawEmployee => EmployeeFactory.fromObject(rawEmployee)).sort((a,b) => b.ratings[0].total - a.ratings[0].total),
        ),
        catchError(this.errorHandler)
      );
  }

  getSingle(id: number): Observable<Employee> {
    return this.http
      .get<EmployeeRaw>(`${this.api}/employees/${id}`)
      .pipe(
        retry(3),
        map(rawEmployee => EmployeeFactory.fromObject(rawEmployee)),
        catchError(this.errorHandler)
      );
  }

  create(employee: Employee): Observable<any> {
    return this.http
      .post(`${this.api}/employees`, employee, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(employee: Employee): Observable<any> {
    return this.http
      .put(`${this.api}/employees/${employee.id}`, employee, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  remove(id: number): Observable<any> {
    return this.http
      .delete(`${this.api}/employees/${id}`, { responseType: 'text' })
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(() => new Error(error))
  }

  constructor(private http: HttpClient) { }
}