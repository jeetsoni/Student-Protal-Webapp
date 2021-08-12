import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterUser } from '../models/register_user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient,private router: Router) { }
  registerUser(userData: RegisterUser) {
    return this.http.post(environment.localhost+"/users",userData);
  }
}
