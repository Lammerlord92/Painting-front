import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Paint} from './paint';
import { of, Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable()
export class PaintService {
  private urlEndPoint = 'http://localhost:8080/paints';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

  getPaints(): Observable<Paint[]>{
  /*  let paints: Paint[] = [
      {id:1,version:0,name:'Heavy Warmgrey', brand:'Vallejo', code:'72.148'},
      {id:2,version:0,name:'Abaddon black', brand:'Citadel', code:'Base'},
      {id:3,version:0,name:'Bloodfest Crimson', brand:'Scale75', code:'SFG-11'}
    ];
    return of(paints);
    */
   return this.http.get<Paint[]>(this.urlEndPoint);
   /*return this.http.get(this.urlEndPoint).pipe(
     map( response => response as Paint[])
   );
   */
  }

  create(paint: Paint): Observable<any>{
    return this.http.post<Paint[]>(this.urlEndPoint, paint, {headers: this.httpHeaders} ).pipe(
      catchError(e => {
        this.router.navigate(['/paints']);
        console.error(e.error.message);
        swal.fire(e.error.message, e.error.error , 'error');
        return throwError(e);
      })
    );
  }

  getPaint(id): Observable<any>{
    return this.http.get<Paint>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/paints']);
        console.error(e.error.message);
        swal.fire('Edit error', e.error.message, 'error');
        return throwError(e);
      })
    );
  }

  update(paint: Paint): Observable<any>{
    return this.http.put<Paint>(this.urlEndPoint, paint, {headers: this.httpHeaders} ).pipe(
      catchError(e => {
        this.router.navigate(['/paints']);
        console.error(e.error.message);
        swal.fire(e.error.message, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  delete(id): Observable<any>{
    console.log(id);
    return this.http.delete<Paint>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders} ).pipe(
      catchError(e => {
        this.router.navigate(['/paints']);
        console.error(e.error.message);
        swal.fire(e.error.message, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
}
