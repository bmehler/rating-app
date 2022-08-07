import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../shared/employee';
import { EmployeeFactory } from '../shared/employee-factory';
import { EmployeeService } from '../shared/employee.service';


@Component({
  selector: 'ra-employee-create',
  templateUrl: './employee-create.component.html',
  styles: [
  ]
})
export class EmployeeCreateComponent  {

  employee = EmployeeFactory.empty();
  
  ngOnInit() {
    this.employee.img = "https://picsum.photos/375?grayscale";
    this.employee.gender = "male";
    this.employee.ratings[0].quality = 10;
    this.employee.ratings[0].quantity = 10;
    this.employee.ratings[0].knowledge  = 10;
    this.employee.ratings[0].initiative = 10;
    this.employee.ratings[0].communication = 10;
    this.employee.ratings[0].team = 10;
    this.employee.ratings[0].learning = 10;
    this.employee.ratings[0].motivation = 10;
    this.employee.ratings[0].performance = 10;
    this.employee.ratings[0].organization = 10;
  };

  constructor(private employeeService: EmployeeService,  private router: Router,
    private route: ActivatedRoute) {}

  getRatings() {
    const sum = (Number(this.employee.ratings[0].quality) + 
    Number(this.employee.ratings[0].quantity) + Number( this.employee.ratings[0].knowledge) + Number(this.employee.ratings[0].initiative) +
    Number(this.employee.ratings[0].communication)  + Number( this.employee.ratings[0].team) + Number(  this.employee.ratings[0].learning) +
    Number( this.employee.ratings[0].motivation) +  Number(this.employee.ratings[0].performance) +  Number(this.employee.ratings[0].organization)) / 10;
    return sum;
  }  

  submitForm() {
    this.employee.ratings[0].total = this.getRatings();
    const employee = EmployeeFactory.fromObject(this.employee)
    this.employeeService.create(employee).subscribe(res => {
      this.employee = EmployeeFactory.empty();
      this.router.navigate(['../'])
    })
  }
}
