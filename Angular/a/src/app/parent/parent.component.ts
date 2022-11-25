import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {


  @Input() set data(value: any) {
    this.bindingValue = value;
  }
  get data(): any {
    return this.bindingValue;
  }

  @Output() public parentList: EventEmitter<string>;

  //parent to pass data child//
  currentItem: string = "parent component data";

  //child to pass data parent//
  childtoparent = ['nistha'];
  bindingValue: any
  constructor() {
    this.parentList = new EventEmitter<string>;
  }
  ngOnInit(): void {

  }

  addItem(newOutput: any) {
    this.parentList.emit(newOutput);
  }

}
