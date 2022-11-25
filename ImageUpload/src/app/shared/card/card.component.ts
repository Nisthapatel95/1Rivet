import { Component, Input, OnInit } from '@angular/core';

import { card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardData!: card
  public artist: boolean = true
  constructor() {

  }

  ngOnInit(): void {
    // console.log(this.cardData);
  }

}
