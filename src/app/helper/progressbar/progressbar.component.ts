import { Component, OnInit, Input } from '@angular/core';

import { Employee } from '../../shared/employee';

@Component({
  selector: 'ra-progressbar',
  templateUrl: './progressbar.component.html',
  styles: [
  ]
})
export class ProgressbarComponent implements OnInit {

  @Input() employee!: Employee;

  public rates: Array<any> = [];
  
  private quality: number = 0;
  private quantity: number= 0;
  private knowledge: number= 0;
  private initiative: number= 0;
  private communication: number= 0;
  private team: number= 0;
  private learning: number= 0;
  private motivation: number= 0;
  private performance: number= 0;
  private organization: number= 0;
  private total: number = 0;

  createRating() {
    this.rates = [
      {title: "Quality/Achive usable results", value: this.quality},
      {title: "Working pace/Quantity", value: this.quantity},
      {title: "Expertise", value: this.knowledge },
      {title: "Initiative", value:  this.initiative},
      {title: "Communication skills", value: this.communication},
      {title: "Ability to work in a team", value: this.team},
      {title: "Abiltity to learn/Readiness of mind", value:  this.learning },
      {title: "Motivation", value: this.motivation },
      {title: "Appearance/Acceptance among their colleagues and external partners", value:  this.performance},
      {title: "Planning and organizational skills", value: this.organization},
    ]
    //console.log(this.rates);
  }
 
  ngOnInit(): void {
    this.quality = this.employee.ratings[0].quality;
    this.quantity = this.employee.ratings[0].quantity;
    this.knowledge = this.employee.ratings[0].knowledge;
    this.initiative = this.employee.ratings[0].initiative;
    this.communication = this.employee.ratings[0].communication ;
    this.team = this.employee.ratings[0].team ;
    this.learning = this.employee.ratings[0].learning;
    this.motivation = this.employee.ratings[0].motivation;
    this.performance = this.employee.ratings[0].performance ;
    this.organization = this.employee.ratings[0].organization;
    this.createRating();
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
