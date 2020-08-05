import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Paint} from './paint';
import { of, Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class PaintService {
  private urlEndPoint:string = 'http://localhost:8080/paints';
  constructor(private http: HttpClient) { }

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
}
