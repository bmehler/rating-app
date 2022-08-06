import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../shared/employee';

@Component({
  selector: 'ra-notification',
  templateUrl: './notification.component.html',
  styles: [
  ]
})
export class NotificationComponent implements OnInit {

  @Input() employee!: Employee;
  private total: number = 0;
  public average: number = 0;

  getTotal(){
    this.average = this.total;
  }
  ngOnInit(): void {
    this.total = this.employee.ratings[0].total;
    this.getTotal();
  }

  getClass(rating:number) {
    let classList='';
    if(rating <= 30){
      classList = 'total-banner btn btn-lg btn-danger'; 
    }else if (rating > 30 && rating < 75){
      classList = 'total-banner btn btn-lg btn-warning';
    }else if(rating > 75){
      classList = 'total-banner btn btn-lg btn-success';
    }
    return classList;
  }

}
