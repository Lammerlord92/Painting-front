import { Component, OnInit } from '@angular/core';
import {Paint} from './paint';
import {PAINTS} from './paints.service';

@Component({
  selector: 'app-paints',
  templateUrl: './paints.component.html',
  styleUrls: ['./paints.component.css']
})
export class PaintsComponent implements OnInit {
  paints:Paint[];

  constructor() { }

  ngOnInit(): void {
    this.paints=PAINTS;
  }

}
