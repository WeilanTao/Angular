import { AppErrorHandler } from './../common/app-error-handler';
import { BadInput } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

/**
 * The presentation logic behind the post page
 */

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  posts:any;


  constructor(private service:PostService) {
  
   }
  ngOnInit(): void {
  // with observable and promisses, when the result is ready, we will be notified, so it doesn't block the main thread
   this.service.getAll()
      .subscribe(response=>{
    // console.log(response);//the response is in JSON format itself 

    this.posts=response;
  })
    // throw new Error('Method not implemented.');
  }

   createPost(title:HTMLInputElement){
     let post:any = {title: title.value};
    
     /**
      * optimistic updates
      */
     this.posts.splice(0,0,post);

     title.value="";

     this.service.create(post)
      .subscribe(
        (response:any)=>{
          post.id=response.id
        // console.log(response);
      },
        (error:AppError)=>{
          this.posts(0,1);

          if(error instanceof BadInput){
            // this.form.setErrors(error.originalError)
          }else{
            throw error;

          }

        });
   }

   updatePost(post:any){
    

     this.service.update(post)
     .subscribe(response =>{
      console.log(response);
     });
   }

   deletePost(post:any){
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);

     this.service.delete(345)
      .subscribe(
        // response=>{}
        null
        ,
        (error: AppError)=>{
          this.posts.splice(index,0,post)
          if(error instanceof NotFoundError){
            alert('This post has already been deleted');
          }else{
            throw error;
          }
        }
      )
   }


  }
  


