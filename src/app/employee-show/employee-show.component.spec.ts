import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';

import { EmployeeShowComponent } from './employee-show.component';

describe('EmployeeShowComponent', () => {
  let component: EmployeeShowComponent;
  let fixture: ComponentFixture<EmployeeShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule ],
      declarations: [ EmployeeShowComponent ],
      providers: [
        EmployeeService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
