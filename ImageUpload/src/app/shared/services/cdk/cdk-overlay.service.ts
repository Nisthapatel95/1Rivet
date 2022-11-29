import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class CdkOverlayService {
  public overlayRef!: OverlayRef;
  overlayTemplate: any;
  public delectImage: Subject<any>;
  public delectImage$: Observable<any>;
  public baseUrl: string;

  constructor(private overlay: Overlay,private http: HttpClient) {

    this.delectImage = new Subject();
    this.delectImage$ = this.delectImage.asObservable();
    this.baseUrl = environment.baseUrl;

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
  public deleteItem(value: boolean) {
    debugger
    if (value) {  
      this.delectImage.next(value);
    }
  }
  postStudioData(data:any){
  
    return this.http.post( "http://localhost:3000/image",data)
  }

}
