import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isLoading = false;
  constructor(
    private registerService: RegisterService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    if (this.cookieService.check('token')) {
      this.router.navigate(['/home']);
    }
  }
  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.registerService.registerUser(form.value).subscribe(
      (res) => {
        this.isLoading = false;
        this.router.navigate(['/']);
        this._snackBar.open('you are register successfully!', 'Close', {
          duration: 5000,
          panelClass: ['pink-snackbar'],
        });
      },
      (error) => {
        this.isLoading = false;
        if (error.error.keyValue) {
          this.router.navigate(['/']);
          this._snackBar.open('You are already registered!', 'Close', {
            duration: 5000,
            panelClass: ['pink-snackbar'],
          });
        }
      }
    );
  }
}
