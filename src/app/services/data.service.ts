import { AppErrorHandler } from './../common/app-error-handler';
import { BadInput } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { catchError, map } from 'rxjs/operators';
import { AppError } from './../common/app-error';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';

const headers:any = new HttpHeaders().set('Content-Type','application/json');

@Injectable({
  providedIn: 'root'
})

/**
 * To work with the http endpoint logic
 */
export class DataService {


    /**
     * @Inject() is a manual mechanism for letting Angular know that a parameter must be injected.
     * @Inject decorator is only needed for injecting primitives.
     * The primitive types are number, string, boolean, bigint, symbol, null, undefined.
     * The other (alternative) way can be used is:
     *      import { Inject } from '@angular/core';
     *      @Inject('url') private url: string;
     * @param url 
     * @param http 
     */
  constructor(@Inject(String) private url:string, private http:HttpClient) { }

  getAll(){
    return this.http.get(this.url)
      .pipe(catchError(this.handleError));
  }

  create(resource:any){
     //patch only update only a few properties of an object
     //  this.http.post(this.url, JSON.stringify(post))
    return this.http.post(this.url, JSON.stringify(resource), {headers:headers} )
      .pipe(catchError(this.handleError));
  }

  update(resource:any){
    
    return this.http.patch(this.url +'/' +resource.id, JSON.stringify({isRead:true}),{headers:headers})
      .pipe(catchError(this.handleError));

  }

  delete(id:number){
      return throwError(new AppError);
    return this.http.delete(this.url +'/' +id).
    pipe(catchError(this.handleError));
  }

  private handleError(error: Response){
    if(error.status==404)
      return throwError(new NotFoundError())
      
    if(error.status===400)
      return throwError(new BadInput(error.json()));
      
    return throwError(new AppError(error));
  }
}
