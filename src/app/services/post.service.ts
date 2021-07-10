import { DataService } from './data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const headers:any = new HttpHeaders().set('Content-Type','application/json');

@Injectable({
  providedIn: 'root'
})

/**
 * To work with the http endpoint logic
 */
export class PostService extends DataService{

  constructor(http:HttpClient) { 
    super('http://localhost:3000/posts' ,http);
  }


}
