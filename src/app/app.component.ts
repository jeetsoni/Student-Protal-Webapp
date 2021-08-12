import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { slideInAnimation } from './route-animation';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {

  title = 'Student Portal';
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {}
}
