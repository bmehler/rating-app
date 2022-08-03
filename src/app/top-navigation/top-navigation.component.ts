import { Component } from '@angular/core';

import {  faTableCells, 
faPlus
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ra-top-navigation',
  templateUrl: './top-navigation.component.html',
  styles: [
  ]
})
export class TopNavigationComponent {

  title = 'Rating App';
  faplus = faPlus;

}
