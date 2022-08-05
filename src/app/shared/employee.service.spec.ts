import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployeeService } from './employee.service';

describe('BookStoreService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService],
    });

    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should get a single Book', () => {
    service.getAll().subscribe((data: any) => {
      expect(data.id).toBe(1);
    });

    const req = httpMock.expectOne(`http://localhost:3000/employees`, 'call to api');
    expect(req.request.method).toBe('GET');

    httpMock.verify();
  });
});
