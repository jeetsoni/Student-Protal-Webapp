import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LeftSideService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getProfile() {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(environment.localhost + '/users/me', {
      headers,
    });
  }
}
