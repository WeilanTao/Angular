import { Component, OnInit } from '@angular/core';

/**
 * Directive practice
 */
@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  options =[
    {id:1, name:"Development"},
    {id:2, name:"Art"},
    {id:3, name:"Language"}
  ]

  submit(x:any){
    console.log(x);
  }

}
