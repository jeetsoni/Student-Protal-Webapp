import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css'],
})
export class RightSideComponent implements OnInit {
  users: any;
  isLoading = false;
  constructor(private ProfileService: ProfileService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.ProfileService.getFollowers().subscribe((res) => {
      this.isLoading = false;
      this.users = res['data'];
    });
  }
}
