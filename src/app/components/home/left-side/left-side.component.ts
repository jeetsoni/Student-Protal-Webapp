import { Component, OnInit } from '@angular/core';
import { LeftSideService } from 'src/app/services/left-side.service';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css'],
})
export class LeftSideComponent implements OnInit {
  Details: any;
  isLoading = false;
  constructor(private Leftside: LeftSideService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.Leftside.getProfile().subscribe((res) => {
      this.isLoading = false;
      this.Details = res['data'];
      console.log(this.Details);
    });
  }
}
