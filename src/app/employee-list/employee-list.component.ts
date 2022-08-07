import { Component, OnInit } from '@angular/core';

import { Employee, Rating } from '../shared/employee';
import {  faTableCells, 
          faUserShield, 
          faEye,
          faPenToSquare,
          faList,
          faStar
} from '@fortawesome/free-solid-svg-icons';

import { EmployeeService } from '../shared/employee.service';

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

  getAllAsc(): void {
    this.employeeService.getAllAsc()
        .subscribe(employees => this.employees = employees);
  }

  getAllDesc(): void {
    this.employeeService.getAllDesc()
        .subscribe(employees => this.employees = employees);
  }

  showList() {
    this.isGridView = true;
  }

  showGrid() {
    this.isGridView = false;
  }

  getCurrrentSorting(sort: any) {
    //console.log('sorting', sort);
    if(sort === '1') {
      this.getAllDesc();
      //console.log('1', sort);
    } else {
      this.getAllAsc();
      //console.log('2', sort);
    }
  } 
}