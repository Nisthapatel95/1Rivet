import { Component, OnInit } from '@angular/core';
import { Overlay } from 'ngx-toastr';
import { Image } from '../image.model';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { CdkOverlayService } from '../shared/services/cdk/cdk-overlay.service';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  public imageList: Image[]

  files: File[] = [];
  public total_images: number = 0;
  constructor(private notifyService: NotificationService,
    private cdkOverlayService:CdkOverlayService,
    ) {
      this.imageList = [];
     }

  ngOnInit(): void {
  }


  onSelect(event: any) {
    this.total_images += event.addedFiles.length;
    if (this.files.length > 5 || this.total_images > 5) {
      this.notifyService.showError("You Can Only Select Upto 5 Images !");
      this.total_images = this.files.length;
      this.cdkOverlayService.delectImage.next(this.total_images)
    }
    else {

      this.files.push(...event.addedFiles);
      const formData = new FormData();

      for (var i = 0; i < this.files.length; i++) {
        formData.append("file[]", this.files[i]);
      }
      this.notifyService.showSuccess("Image Uploaded Successfully");
    }
  }
  onRemove(event: any) {
    this.cdkOverlayService.openDialog(DialogComponent);
    console.log(event);

    
    this.files.splice(this.files.indexOf(event), 1);
    this.total_images = this.total_images - 1;
    console.log(this.total_images);
    

  }
 
}