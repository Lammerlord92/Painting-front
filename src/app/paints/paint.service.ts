import { Injectable } from '@angular/core';
import {Paint} from './paint';

@Injectable()
export class PaintService {

  constructor() { }

  getPaints(): Paint[]{
    return [
      {id:1,version:0,name:'Heavy Warmgrey', brand:'Vallejo', code:'72.148'},
      {id:2,version:0,name:'Abaddon black', brand:'Citadel', code:'Base'},
      {id:3,version:0,name:'Bloodfest Crimson', brand:'Scale75', code:'SFG-11'}
    ];
  }
}
