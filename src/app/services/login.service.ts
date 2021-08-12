import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginUser } from '../models/login_users';
import { RegisterUser } from '../models/register_user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginuser(userData :LoginUser){
    return this.http.post<{token: string, userObject: RegisterUser}>(environment.localhost + "/users/login", userData);
  }
}
