import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Employee } from '../shared/employee';
import { EmployeeFactory } from '../shared/employee-factory';
import { EmployeeService } from '../shared/employee.service';

import { faChartLine, faTrashCan
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ra-employee-edit',
  templateUrl: './employee-edit.component.html',
  styles: [
  ]
})
export class EmployeeEditComponent implements OnInit {

  @ViewChild('editForm', { read: NgForm }) form!: NgForm;

  employee!: Employee;

  constructor( 
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employee = EmployeeFactory.empty();
    const params = this.route.snapshot.params;
    this.employeeService.getSingle(params['id'])
    .subscribe(e => this.employee = e);
  }

  updateRatings() {
    const sum = (Number(this.employee.ratings[0].quality) + 
    Number(this.employee.ratings[0].quantity) + Number( this.employee.ratings[0].knowledge) + Number(this.employee.ratings[0].initiative) +
    Number(this.employee.ratings[0].communication)  + Number( this.employee.ratings[0].team) + Number(  this.employee.ratings[0].learning) +
    Number( this.employee.ratings[0].motivation) +  Number(this.employee.ratings[0].performance) +  Number(this.employee.ratings[0].organization)) / 10;
    return sum;
  }

  submitForm() {
    this.employee.ratings[0].total = this.updateRatings();
    const employee = EmployeeFactory.fromObject(this.employee)
    this.employeeService.update(employee).subscribe(() => {
      this.employee = EmployeeFactory.empty();
      this.router.navigate(['../'])
    })
  }
}