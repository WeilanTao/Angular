import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './courses.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lessons= [1,2];
  viewMode='map';


  post={
    title: 'hello',
    isLiked: true
  }

  tweet={
    body:"Here is the body of a tweet...",
    isLiked:false,
    likesCount:10
  }

  songs:any;

  onLoad(){
    this.songs =[
      {id:1, name:'song1'},
      {id:2, name:'song2'},
      {id:3, name:'song3'}
    ]
  }
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite changed", eventArgs);
  }

  onAdd(){
    this.songs.push({id: 4, name: 'song4'});
  }

  onRemove(song:any){
    let index = this.songs.indexOf(song);
    this.songs.splice(index,1);
  }

  trackSong(index:number, song:any){  //to preserve the data and prevent Angular from reloading the same data based on the reference on Memory
    return song? song.id : undefined;  
  }

  canSave=true;

  task={
    title:'Review applications',
    assignee:{
      name:'John Smith'
    }
  }
}
