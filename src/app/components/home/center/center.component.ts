import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
})
export class CenterComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  posts: any;
  isLoading: boolean;
  fileToUpload: File = null;
  public imagePath;
  imgURL: any;
  post: any;
  constructor(private PostService: PostService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.PostService.getPost().subscribe((res) => {
      this.isLoading = false;
      this.posts = res['data'];
      console.log(this.posts);
    });
  }
  onCreatePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // this.isLoading = true;
    // this.post = form.value;
    // this.post.body_photo = this.croppedImage;
    let fd = new FormData();

    if(this.fileToUpload) {
      fd.append('body', form.value.body)
      fd.append('body_photo',this.fileToUpload, this.fileToUpload.name);
      console.log(fd);
      this.PostService.addPost(fd).subscribe((res) => {
        // this.isLoading = false;
        form.reset();
        this.ngOnInit();
      });
    }

  }
  onImagePicked(event) {
    if(event.target.value) {
      this.fileToUpload = <File>event.target.files[0];
    }
    //   var mimeType = files[0].type;
    //   if (mimeType.match(/image\/*/) == null) {
    //     this._snackBar.open('Uplode image file only', 'Close', {
    //       duration: 5000,
    //       panelClass: ['pink-snackbar'],
    //     });
    //     return;
    //   }
    //   this.fileToUpload = files.item(0);
    //   var reader = new FileReader();
    //   this.imagePath = files;
    //   reader.readAsDataURL(files[0]);
    //   reader.onload = (_event) => {
    //   this.imgURL = reader.result;
    // }
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
}
