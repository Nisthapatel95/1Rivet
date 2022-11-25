import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { OverlayModule } from '@angular/cdk/overlay';
import { CardComponent } from './card/card.component';
import { DialogComponent } from './dialog/dialog.component';
import { CdkOverlayService } from './services/cdk/cdk-overlay.service';

@NgModule({
  declarations: [
    CardComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OverlayModule
  ],
  exports:[
    CardComponent
  ],
  providers:[CdkOverlayService]
})
export class SharedModule { }
