import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LeftSideService } from 'src/app/services/left-side.service';
import { PostService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ProfileNameEditComponent } from './profile-name-edit/profile-name-edit.component';

@Component({
  selector: 'app-home',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  fileToUpload: File = null;
  Details: any;
  isLoading = false;
  users: any;
  userId: string;
  userSubscription: Subscription;
  loggedInUser: boolean;
  loggedInUserId: string;
  follow: boolean;
  posts: any
  constructor(
    private ProfileService: ProfileService,
    private Leftside: LeftSideService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private post: PostService
  ) {}

  ngOnInit(): void {
    this.ProfileService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
    this.isLoading = true;
    this.userSubscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.userId = params['id'];
        this.isLoading = true;
        this.ProfileService.getUsersDetails(this.userId).subscribe((res) => {
          this.Details = res['data'];
          this.loggedInUser = res['loggedInUser'];
          console.log(this.Details);
          this.Leftside.getProfile().subscribe((res) => {
            this.loggedInUserId = res['data']._id;
            this.follow = this.Details.followers.includes(this.loggedInUserId)
            console.log(this.follow)
            this.post.getPosts(this.Details._id).subscribe((res) => {
              this.posts = res['data'];
              this.isLoading = false;
            })
          });
        });
      }
    );
    this.ProfileService.getUsersSuggestion().subscribe((res) => {
      this.users = res['data'];
    });
  }
  onImagePicked(files: FileList) {
    this.fileToUpload = files.item(0);
    this.isLoading = true;
    this.ProfileService.chageProfile(this.fileToUpload).subscribe((res) => {
      this.isLoading = false;
      console.log(res);
      location.reload();
    });
  }
  getProfilePhoto() {
    return 'https://student-portal-serve.herokuapp.com/users/' + this.Details._id + '/avatar';
  }
  openDialog(
    type: string,
    _id: String,
    inp1: string,
    inp2: string,
    inp3: string,
    inp4: string,
    method: string
  ) {
    this.dialog.open(ProfileNameEditComponent, {
      data: {
        _id,
        inp1,
        inp2,
        inp3,
        inp4,
        type,
        method,
        Details: this.Details,
      },
    });
  }
  getUserDetails(id: string) {
    //   this.router.navigate(['/profile', id]);
    //   location.reload();
  }
  followUser(follower:string, following: string, action: string) {
    this.isLoading = true
    this.ProfileService.followUser(follower, following, action)
    .subscribe(res => {
      this.ngOnInit();
      this._snackBar.open(action +' Successfully', 'Close', {
        duration: 5000,
        panelClass: ['pink-snackbar'],
      });
    })
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
