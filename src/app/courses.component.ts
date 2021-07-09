import { ThisReceiver } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import{Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',  //for html element
    template:`
    <h2>{{"Title: "+getTitle()}}</h2>
    <h2 [textContent]="getTitle()"></h2>  <!--property binding-->
    
    <div>
        <span 
        class="glyphicon"  
        [ngClass]="{
            'glyphicon-star':isLiked,
            'glyphicon-star-empty':!isLiked
        }"
        style="font-size: 100px" 
        (click)="onClick()"
        ></span>

    </div>

    <!--ngModel binds the input to the titleCase variable-->
    <div>
        <input [(ngModel)]="titleCase" /><br/>
        {{titleCase | titlecase | title_case }}<br/>
    </div>

    <img src="{{imgUrl}}"/>  
    <img [src]="imgUrl"/>  <!--property binding-->

    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>

    <!-- property binding -->
    <table>
        <tr>
            <td [attr.colspan]="colSpan"> </td>
        </tr>
    </table>

    <button class= "btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue': 'green'">Save</button>
    <button (click)="onSave($event)">ClickMe</button>
    <!--input [value]="email" (keyup.enter)=" email = $event.target.value;onKeyUp()" /-->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    <br/>
    {{course.title | uppercase | lowercase}} <br/>
    {{course.students | number}} <br/>
    {{course.rating|number:'3.2-2'}} <br/>
    {{course.price | currency: 'CAD':true:'3.2-2'}} <br/>
    {{course.releaseDate| date:'shortDate'}} <br/>
    {{course.text | summary:10}}  


    `,
    styles:[`
    .glyphicon{
        color:green;
    }
    `],  
    styleUrls: ['./courses.component.css'],

    encapsulation: ViewEncapsulation.Emulated

    // inputs:['isLiked']

})
export class CoursesComponent{
    title=  "List of Courses";
    courses;
    colSpan=2;
    isActive=false;

    @Input('is-liked') isLiked=false;
    // isLiked=false;

    @Output('change') click=new EventEmitter();

    email="me@eaxmple.com";

    course={
        title:"The Angular Course",
        rating:"4.9745",
        students:"190321",
        price:"23",
        releaseDate: new Date(2016,3,1),
        text:`hihihiyriewuyriuwyriuwyrweiuyeiwuyrwiuyiweytiwefkdhvjfkabfkjehufiriaiehi;fklakalee`
    }

    titleCase= "";

    imgUrl =  "assets/images/xjj.png";
    constructor(service: CoursesService){//dependency injection;  but losely coupled
        // let service = new CourseService();//dependency injection;  but still tightly coupled
        this.courses=service.getCourses();
    }

    getTitle(){
        return this.title;
    }

    onSave($event: any){
        $event.stopPropagation(); //stop event bubbling
        console.log("button was clicked",$event);
    }

    onKeyUp(){
         console.log(this.email); 
    }

    onClick(){
        console.log(this.isLiked);
        this.isLiked = !this.isLiked;
        console.log(this.isLiked);
        this.click.emit({newValue: this.isLiked});
    }

}

export interface FavoriteChangedEventArgs{
    newValue: boolean
}