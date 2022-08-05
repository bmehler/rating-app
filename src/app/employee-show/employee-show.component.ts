import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../shared/employee';
import { EmployeeFactory } from '../shared/employee-factory';
import { EmployeeService } from '../shared/employee.service';

import { faChartLine
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ra-employee-show',
  templateUrl: './employee-show.component.html',
  styles: [
  ]
})
export class EmployeeShowComponent implements OnInit {

  employee: Employee = EmployeeFactory.empty();

  fachartline = faChartLine;

  constructor(
    private ra: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.ra.getSingle(params['id'])
    .subscribe(e => this.employee = e);
  }

  getClass(rating:number) {
    let classList='';
    if(rating <= 30){
      classList = 'progress-bar progress-bar-striped bg-danger'; 
    }else if (rating > 30 && rating < 75){
      classList = 'progress-bar progress-bar-striped bg-warning';
    }else if(rating > 75){
      classList = 'progress-bar progress-bar-striped bg-success';
    }
    return classList;
  }

}
