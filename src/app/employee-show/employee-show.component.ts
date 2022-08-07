import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../shared/employee';
import { EmployeeFactory } from '../shared/employee-factory';
import { EmployeeService } from '../shared/employee.service';

import { faChartLine, faTrashCan
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ra-employee-show',
  templateUrl: './employee-show.component.html',
  styles: [
  ]
})
export class EmployeeShowComponent implements OnInit {

  employee!: Employee;

  fachartline = faChartLine;
  fatrash = faTrashCan;

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

  removeEmployee() {
    this.ra.remove(this.employee.id)
      .subscribe(res => this.router.navigate(['../']));
  }
}