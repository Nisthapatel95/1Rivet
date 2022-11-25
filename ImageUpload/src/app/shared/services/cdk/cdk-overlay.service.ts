import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class CdkOverlayService {
  public overlayRef!: OverlayRef;
  overlayTemplate: any;

  public delectImage: Subject<any>;
  constructor(private overlay: Overlay) {

    this.delectImage = new Subject();
   }


  openDialog(component: any) {
    this.overlayRef = this.overlay.create({

      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay-panel',

      positionStrategy: this.overlay

        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
    })

    const portal = new ComponentPortal(component)
    const componentRef = this.overlayRef.attach(portal)
    this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());

  }
}
