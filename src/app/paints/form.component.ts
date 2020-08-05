import { PaintService } from './paint.service';
import { Component, OnInit } from '@angular/core';
import { Paint } from './paint';
import {Router} from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  paint:Paint = new Paint();
  title:string = "Create Paint";

  constructor(private paintService:PaintService, private router:Router) { }

  ngOnInit(): void {
  }

  public create():void{
    this.paintService.create(this.paint).subscribe(
      response => this.router.navigate(['/paints'])
    )
  }

}
