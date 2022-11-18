import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AgeConstraint } from './age-constraint';



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://localhost:8080";
  private endPoint  = "age_constraints";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
  console.log("AgeConstr constructor");
  }

  create (ageConstraint : AgeConstraint) : Observable<AgeConstraint>{

    return this.httpClient.post<AgeConstraint> (
      this.apiServer + '/' + this.endPoint + '/',
      JSON.stringify(ageConstraint),
      this.httpOptions
    ).pipe (
      catchError(this.errorHandler)
    );
  };

  getById(id : number) : Observable<AgeConstraint>{
    return this.httpClient.get<AgeConstraint>(this.apiServer + '/' + this.endPoint + '/get/' + id ).pipe(
      catchError(this.errorHandler)
    );
  }

  getAll () : Observable<AgeConstraint[]> {
    return this.httpClient.get<AgeConstraint[]>(this.apiServer + '/' + this.endPoint + '/get').pipe(
      catchError(this.errorHandler)
    );
  }

  // update(id : number, ageConstraint : AgeConstraint): Observable<AgeConstraint> {
  //   return this.httpClient.put<AgeConstraint>(this.apiServer + '/' + this.endPoint + '/add/' + id, JSON.stringify(ageConstraint), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )

  delete(id : number){
    return this.httpClient.delete<AgeConstraint>(this.apiServer + '/' + this.endPoint + '/remove/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error : any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
