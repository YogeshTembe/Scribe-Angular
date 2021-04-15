import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import {NgxEditorModule} from 'ngx-editor';
import {HttpClientModule} from '@angular/common/http';
import { LoginmedComponent } from './loginmed/loginmed.component';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
let config = {
  apiKey: "AIzaSyCN3fZ5f6fqFGRM7QkAf_1U7UaiXfsfrzw",
  authDomain: "scribe-angular-b0dc0.firebaseapp.com",
  databaseURL: "https://scribe-angular-b0dc0.firebaseio.com",
  projectId: "scribe-angular-b0dc0",
  storageBucket: "scribe-angular-b0dc0.appspot.com",
  messagingSenderId: "868005189388",
  appId: "1:868005189388:web:69a3765336fbce9dca9b29",
  measurementId: "G-WFTMFW921D"
};
firebase.initializeApp(config);
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    LoginmedComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
