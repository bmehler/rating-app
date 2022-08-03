import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';

import {  faTableCells, 
  faUserShield, 
  faEye,
  faPenToSquare,
  faList,
  faStar
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ra-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styles: [
  ]
})
export class EmployeeListItemComponent {

  fausershield = faUserShield;
  faeye = faEye;
  faedit = faPenToSquare;
  fastar = faStar;
 
  @Input() employee: Employee;

}


