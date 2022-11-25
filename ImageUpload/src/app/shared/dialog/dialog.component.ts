import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkOverlayService } from '../services/cdk/cdk-overlay.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public imagedata: any
  @Input() name!: string;

  @Output() public confirm: EventEmitter<boolean>;

  @Output() public cancle: EventEmitter<boolean>;

  constructor(private cdkOverlayService: CdkOverlayService,) {

    this.confirm = new EventEmitter();
    this.cancle = new EventEmitter();
  }

  ngOnInit(): void {
    this.cdkOverlayService.delectImage.subscribe(res => {
      this.imagedata = res;
      console.log(this.imagedata);

    })
  }

  public confirmData(): void {
    this.confirm.emit(true);
    
    

  }

  public cancleData(): void {
    this.cancle.emit(true);

  }
}
