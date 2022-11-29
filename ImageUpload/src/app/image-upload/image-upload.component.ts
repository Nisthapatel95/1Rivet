import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  public data: boolean = false;
  public imageList: Image[];
  public removeIndex!: number;
  selectedImage: any;
  files: File[] = [];
  public total_images: number = 0;
  constructor(private notifyService: NotificationService,
    private cdkOverlayService: CdkOverlayService,
  ) {
    this.imageList = [];
  }

  ngOnInit(): void {
    this.postdata()
    this.cdkOverlayService.delectImage$.subscribe((Res: any) => {
      this.data = Res
      if (Res) {
       
        this.files.splice(this.removeIndex, 1);
        console.log(this.files);

      }
      else if (this.data === false) {
        this.total_images = this.total_images
        console.log(this.total_images);

      }
    })
  }


  onSelect(event: any) {
    console.log(event);
    let beforeUpdateFile = this.files.length;
    if (event.rejectedFiles.length != 0) {
      this.notifyService.showError("Please upload a valid file format (Supported file formats: .jpg, .png, .jpeg, .heif)");
    }
    this.total_images += event.addedFiles.length;
    if (this.files.length > 5 || this.total_images > 5) {
      this.notifyService.showError("You Can Only Select Upto 5 Images !");
      this.total_images = this.files.length;
    }
    else {

      this.files.push(...event.addedFiles);
      const formData = new FormData();

      for (var i = 0; i < this.files.length; i++) {
        formData.append("file[]", this.files[i]);
      }
    }
    let afterUpdateFile = this.files.length;
    (beforeUpdateFile != afterUpdateFile) && this.notifyService.showSuccess("Image Uploaded Successfully");
  }

  onRemove(event: any) {
    debugger
    console.log(event);
    this.removeIndex = event;

    this.cdkOverlayService.openDialog(DialogComponent);

  }

  setFavImage(selectedImage: any) {
    console.log(selectedImage);

    this.selectedImage = selectedImage
  }
  postdata(){
    // this.cdkOverlayService.postStudioData().subscribe(res =>{
    //   console.log(res);
      
    // })
  }
}