import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public isLoading = new Subject<any>();
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  chageProfile = (avatar: File) => {
    console.log(avatar)
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    const formData: FormData = new FormData();
    formData.append('avatar', avatar, avatar.name);
    return this.http.post(
      environment.localhost + '/users/me/avatar',
      formData,
      {
        headers,
      }
    );
  };

  profileNameEdit(data: any, _id: string) {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.put(environment.localhost + '/users/' + _id, data, {
      headers,
    });
  }
  addExperience(data: any, _id: string) {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.put(
      environment.localhost + '/users/addexperience/' + _id,
      data,
      {
        headers,
      }
    );
  }
  addEducation(data: any, _id: string) {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.put(
      environment.localhost + '/users/addeducation/' + _id,
      data,
      {
        headers,
      }
    );
  }
  updateExperience(data: any, userid: string, expid: string) {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.put(
      environment.localhost + '/users/addexperience/' + userid + '/' + expid,
      data,
      {
        headers,
      }
    );
  }

  updateEducation(data: any, userid: string, expid: string) {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.put(
      environment.localhost + '/users/addeducation/' + userid + '/' + expid,
      data,
      {
        headers,
      }
    );
  }

  getUsersDetails(id: string) {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(environment.localhost + '/users/' + id, {
      headers,
    });
  }

  followUser(follower: string, following: string, action: string){
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.post(environment.localhost + '/users/follow',{follower, following, action},{ headers })
  }

  getUsersSuggestion() {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(environment.localhost + '/users/suggestion', {
      headers,
    });
  }

  getFollowers() {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(environment.localhost + '/users/followers', {
      headers,
    });
  }
  getFollowings() {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(environment.localhost + '/users/followings', {
      headers,
    });
  }

}
