import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LeftSideService } from 'src/app/services/left-side.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userId = '';
  avatar = '';
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private Leftside: LeftSideService
  ) {}

  ngOnInit(): void {
    this.Leftside.getProfile().subscribe((res) => {
      this.userId = res['data']._id;
      this.avatar = res['data'].avatar;
    });
  }
  onLogout() {
    this.cookieService.delete('token');
    this.router.navigate(['/']);
    this._snackBar.open('Logout Successfully', 'Close', {
      duration: 5000,
      panelClass: ['pink-snackbar'],
    });
  }
}
