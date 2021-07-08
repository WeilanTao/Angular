import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  constructor() { }

  @Input('title') title:string= ""; 

  isExpand:boolean= false;

  onClick(){
    this.isExpand=!this.isExpand;
  }

}
