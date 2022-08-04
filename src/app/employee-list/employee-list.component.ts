import { Component, OnInit } from '@angular/core';

import { Employee, Rating } from '../shared/employee';
import {  faTableCells, 
          faUserShield, 
          faEye,
          faPenToSquare,
          faList,
          faStar
} from '@fortawesome/free-solid-svg-icons';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'ra-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [ 
  ]
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {}

  employees: Employee[] = [];
  
  fatablecells = faTableCells;
  falist = faList;
  fausershield = faUserShield;
  faeye = faEye;
  faedit = faPenToSquare;
  fastar = faStar;

  isGridView: boolean = true;

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.employeeService.getAll()
        .subscribe(employees => this.employees = employees);
  }

  showList() {
    this.isGridView = true;
  }

  showGrid() {
    this.isGridView = false;
  }
}