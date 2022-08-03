import { Component, OnInit } from '@angular/core';

import { Employee, Rating } from '../shared/employee';
import {  faTableCells, 
          faUserShield, 
          faEye,
          faPenToSquare,
          faList,
          faStar
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ra-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [ 
  ]
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  
  fatablecells = faTableCells;
  falist = faList;
  fausershield = faUserShield;
  faeye = faEye;
  faedit = faPenToSquare;
  fastar = faStar;

  isGridView: boolean = true;

  ngOnInit(): void {
    this.employees = [
      new Employee(
        1,
        'https://via.placeholder.com/375x250?text=350x250+MPU',
        'Mike Meier',
        'München',
        'male',
        27,
        'Projectmanager',
        'IT Systems',
        [new Rating(50,20,30,40,50,60,70,80,30,45,0)]
      ),
      new Employee(
        2,
        'https://via.placeholder.com/375x250?text=350x250+MPU',
        'Mike Meier',
        'München',
        'male',
        27,
        'Projectmanager',
        'IT Systems',
        [new Rating(50,20,30,40,50,60,70,80,30,45,78)]
      ),
      new Employee(
        3,
        'https://via.placeholder.com/375x250?text=350x250+MPU',
        'Mike Meier',
        'München',
        'male',
        27,
        'Projectmanager',
        'IT Systems',
        [new Rating(50,20,30,40,50,60,70,80,30,45,45)]
      )
    ]
  }
}