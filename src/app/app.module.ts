import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';


import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { LeftSideComponent } from './components/home/left-side/left-side.component';
import { CenterComponent } from './components/home/center/center.component';
import { RightSideComponent } from './components/home/right-side/right-side.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileNameEditComponent } from './components/profile/profile-name-edit/profile-name-edit.component';
import { MyNetworkComponent } from './components/my-network/my-network.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PostsComponent } from './components/posts/posts.component';
import { MessagingService } from './services/messaging.service';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    LeftSideComponent,
    CenterComponent,
    RightSideComponent,
    ProfileComponent,
    ProfileNameEditComponent,
    MyNetworkComponent,
    MessagingComponent,
    PostsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    ImageCropperModule,
    MatTabsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [CookieService, MatDatepickerModule, MatNativeDateModule, MessagingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
