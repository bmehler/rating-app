import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ra-sorting-list',
  templateUrl: './sorting-list.component.html',
  styles: [
  ]
})
export class SortingListComponent {

  constructor() {}

  sortingOptions = ['aufsteigend', 'absteigend'];
  selectedOption = 1;

  @Output() sortingEvent = new EventEmitter<string>();

  Option: string[] = ['aufsteigend', 'absteigend'];

  changeSorting(e: any) {
    this.sortingEvent.emit(e.target.value);
  }

}