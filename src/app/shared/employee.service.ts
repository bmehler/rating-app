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
          .map(rawEmployee => EmployeeFactory.fromObject(rawEmployee)),
        ),
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(() => new Error(error))
  }

  constructor(private http: HttpClient) { }
}
