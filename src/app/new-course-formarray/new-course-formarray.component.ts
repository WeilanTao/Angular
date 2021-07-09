import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'new-course-formarray',
  templateUrl: './new-course-formarray.component.html',
  styleUrls: ['./new-course-formarray.component.css']
})
export class NewCourseFormarrayComponent  {

  courseform =new FormGroup({
    name: new FormControl(),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics:new FormArray([new FormControl('hihihi') ])
  });

  addTopic(topic:HTMLInputElement){
    (this.topics).push(new FormControl(topic.value));
    topic.value="";
  }

  removeTopic(i:number){
    
    this.topics.removeAt(i);
  }

  get topics(){
    return this.courseform.get('topics') as FormArray;
  }

}
