import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() public childList: string;
  @Output() public parentList: EventEmitter<string>;

  constructor() {
    this.childList = '';
    this.parentList = new EventEmitter<string>;
  }

  ngOnInit() {
    console.log(this.childList);

  }

  public addNew(val: string) {
    debugger
    this.parentList.emit(val);
  }
}
