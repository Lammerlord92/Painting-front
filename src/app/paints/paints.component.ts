import { Component, OnInit } from '@angular/core';
import {Paint} from './paint';
import {PaintService} from "./paint.service";

@Component({
  selector: 'app-paints',
  templateUrl: './paints.component.html',
  styleUrls: ['./paints.component.css']
})
export class PaintsComponent implements OnInit {
  paints: Paint[];

  constructor(private paintService: PaintService) { }

  ngOnInit(): void {
    this.paints = this.paintService.getPaints();
  }

}
