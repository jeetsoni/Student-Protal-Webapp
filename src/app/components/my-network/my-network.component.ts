import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LeftSideService } from 'src/app/services/left-side.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-my-network',
  templateUrl: './my-network.component.html',
  styleUrls: ['./my-network.component.css']
})
export class MyNetworkComponent implements OnInit {
  Followers: any;
  Followings: any;
  isLoading = false;
  loggedInUserId
  constructor(private ProfileService: ProfileService, private _snackBar: MatSnackBar, private Leftside: LeftSideService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.Leftside.getProfile().subscribe((res) => {
      this.loggedInUserId = res['data']._id;
    });
    this.ProfileService.getFollowers().subscribe((res) => {
      this.Followers = res['data'];
    });
    this.ProfileService.getFollowings().subscribe((res) => {
      this.isLoading = false;
      this.Followings = res['data'];
      console.log(this.Followings)
    });
  }
  unfollow(follower: string, following: string, action: string) {
    this.isLoading = true
    this.ProfileService.followUser(follower,following,action).subscribe(res => {
      this.ngOnInit();
      this._snackBar.open('Unfollowed Successfully', 'Close', {
        duration: 5000,
        panelClass: ['pink-snackbar'],
      });
    })
  }
}
