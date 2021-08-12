import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  addPost(post: any) {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    console.log(post)
    return this.http.post(environment.localhost + '/post', post, {
      headers,
    });
  }
  getPost() {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(environment.localhost + '/post', {
      headers,
    });
  }
  getUsersPost() {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(environment.localhost + '/post/user' , {
      headers,
    });
  }
  getPosts(id: string) {
    let token = this.cookieService.get('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(environment.localhost + '/post/' +id , {
      headers,
    });
  }
}
