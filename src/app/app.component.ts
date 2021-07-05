import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './courses.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lessons= [1,2];

  post={
    title: 'hello',
    isLiked: true
  }

  tweet={
    body:"Here is the body of a tweet...",
    isLiked:false,
    likesCount:10
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite changed", eventArgs);
  }
}
