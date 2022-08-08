import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../shared/employee';

import { faStar
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ra-stars',
  templateUrl: './stars.component.html',
  styles: [
  ]
})
export class StarsComponent {

  @Input() employee!: Employee;

  fastar = faStar;

  public total: number = 0;
  public average: number = 0;

  getTotal(){
    this.average = this.total;
  }
  ngOnInit(): void {
    this.total = this.employee.ratings[0].total;
    this.getTotal();
  }
  
  stars() {
    if(this.average > 70) {
      return 'great';
    } else if(this.average <= 70 && this.average > 50) {
      return 'better';
    } else {
      return 'worse';
    }
  }
}