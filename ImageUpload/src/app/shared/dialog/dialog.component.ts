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


  constructor(private cdkOverlayService: CdkOverlayService,) {

  }

  ngOnInit(): void {
    // this.cdkOverlayService.delectImage.subscribe(res => {
    //   this.imagedata = res;
    //   console.log(this.imagedata);

    // })
  }
  public confirmData(): void {
    this.cdkOverlayService.overlayRef.detach()
    this.cdkOverlayService.deleteItem(true);
  }

  public cancleData(): void {
    this.cdkOverlayService.overlayRef.detach()
    this.cdkOverlayService.delectImage.next(false)
  }
}
