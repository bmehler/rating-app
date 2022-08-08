/*import { createPlatform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StarsComponent } from './stars.component';
import { EmployeeService } from 'src/app/shared/employee.service';

export class MockEmployeeService {
  employee = {
    id: 1,
    img: "https://picsum.photos/375?grayscale",
    name: "Mike Meier",
    city: "Munich",
    gender: "male",
    age: 27,
    position: "Webdeveloper",
    departement: "Planning",
    ratings: [
      {
        quality: 20,
        quantity: 20,
        knowledge: 40,
        initiative: 10,
        communication: 90,
        team: 80,
        learning: 50,
        motivation: 90,
        performance: 70,
        organization: 50,
        total: 52
      }
    ]
};
}

describe('StarsComponent', () => {
  let component: StarsComponent;
  let fixture: ComponentFixture<StarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers:[
        StarsComponent, MockEmployeeService,
        { provide: EmployeeService, useClass: MockEmployeeService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    
  });

  it('should create', ()=> {
    let employeeService = TestBed.inject(MockEmployeeService);
    component.ngOnInit();
    expect(component.total).toBe(employeeService.employee.ratings[0].total);
    expect(component.total).toBeTruthy();
  });
});
*/