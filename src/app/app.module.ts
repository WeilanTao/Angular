import { NotFoundError } from './common/not-found-error';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { Title_Case } from './title_case.pipe';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { ErrorHandler, NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { NewCourseFormarrayComponent } from './new-course-formarray/new-course-formarray.component';
import { FormbuildersampleComponent } from './formbuildersample/formbuildersample.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostComponent } from './post/post.component';
import {HttpClientModule } from '@angular/common/http';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    Title_Case,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    NewCourseFormarrayComponent,
    FormbuildersampleComponent,
    ChangePasswordComponent,
    PostComponent,
    GithubFollowersComponent,
    NavBarComponent,
    HomeComponent,
    GitHubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'', 
        component:HomeComponent
      },
      {
        path:'followers', 
        component:GithubFollowersComponent
      },
      {
        path:'followers/:userid/:username', 
        component:GitHubProfileComponent
      },
      {
        path:'posts', 
        component:PostComponent
      },
      {
        path:'**', 
        component:NotFoundComponent
      }
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    {provide:ErrorHandler,useClass:AppErrorHandler},
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
