import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-name-edit',
  templateUrl: './profile-name-edit.component.html',
  styleUrls: ['./profile-name-edit.component.css'],
})
export class ProfileNameEditComponent implements OnInit {
  date: string;
  experience: any = [];
  val: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Profile: ProfileService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // console.log(this.data.Details.experience);
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  onUpdate(form: NgForm) {
    //if form is invalid
    if (form.invalid) {
      return;
    }
    this.Profile.isLoading.next({ isLoading: true });
    this.Profile.profileNameEdit(form.value, this.data.Details._id).subscribe(
      (res) => {
        this.Profile.isLoading.next({ isLoading: false });
        this.reloadComponent();
      }
    );
  }
  onAddExperience(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.Profile.isLoading.next({ isLoading: true });
    this.date =
      form.value.start.toLocaleDateString() +
      '-' +
      form.value.end.toLocaleDateString();
    form.value.date = this.date;
    delete form.value.start;
    delete form.value.end;
    this.Profile.addExperience(form.value, this.data.Details._id).subscribe(
      (res) => {
        this.Profile.isLoading.next({ isLoading: false });
        this.reloadComponent();
      }
    );
  }

  onAddEducation(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.Profile.isLoading.next({ isLoading: true });
    this.date =
      form.value.start.toLocaleDateString() +
      '-' +
      form.value.end.toLocaleDateString();
    form.value.date = this.date;
    delete form.value.start;
    delete form.value.end;
    this.Profile.addEducation(form.value, this.data.Details._id).subscribe(
      (res) => {
        this.Profile.isLoading.next({ isLoading: false });
        this.reloadComponent();
      }
    );
  }

  onUpdateExperience(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);

    this.Profile.isLoading.next({ isLoading: true });
    this.date =
      form.value.start.toLocaleDateString() +
      '-' +
      form.value.end.toLocaleDateString();
    form.value.date = this.date;
    delete form.value.start;
    delete form.value.end;
    this.Profile.updateExperience(
      form.value,
      this.data.Details._id,
      this.data._id
    ).subscribe((res) => {
      this.Profile.isLoading.next({ isLoading: false });
      this.reloadComponent();
    });
  }

  onUpdateEducation(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.Profile.isLoading.next({ isLoading: true });
    this.date =
      form.value.start.toLocaleDateString() +
      '-' +
      form.value.end.toLocaleDateString();
    form.value.date = this.date;
    delete form.value.start;
    delete form.value.end;
    this.Profile.updateEducation(
      form.value,
      this.data.Details._id,
      this.data._id
    ).subscribe((res) => {
      this.Profile.isLoading.next({ isLoading: false });
      this.reloadComponent();
    });
  }
}
