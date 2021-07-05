import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {

  @Input('likesCount') likesCount= 0;

  @Input('isActive') isActive =  false;

  onLike(){
    this.isActive=!this.isActive;
    this.likesCount=this.isActive? this.likesCount+1: this.likesCount-1;
    console.log(this.isActive,this.likesCount);
  }


}
