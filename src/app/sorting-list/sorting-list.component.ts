import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ra-sorting-list',
  templateUrl: './sorting-list.component.html',
  styles: [
  ]
})
export class SortingListComponent {

  constructor() {}

  sortingOptions = ['absteigend', 'aufsteigend'];
  selectedOption = 1;

  @Output() sortingEvent = new EventEmitter<string>();

  changeSorting(e: any) {
    this.sortingEvent.emit(e.target.value);
  }

}