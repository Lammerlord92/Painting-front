import { PaintService } from './paint.service';
import { Component, OnInit } from '@angular/core';
import { Paint } from './paint';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  paint:Paint = new Paint();
  title:string = "Create Paint";

  constructor(
    private paintService:PaintService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadPaint();
  }

  loadPaint():void{
    this.activatedRoute.params.subscribe(params =>{
      let id=params['id']
      if(id){
        this.paintService.getPaint(id).subscribe( (paint) => this.paint = paint)
      }
    })
  }

  public create():void{
    this.paintService.create(this.paint).subscribe(
      response =>{
        this.router.navigate(['/paints']);
        swal.fire('New paint',`Paint ${this.paint.name} created successfully`,'success');
      }
    )
  }

  public update():void{
    this.paintService.update(this.paint).subscribe(
      response =>{
        this.router.navigate(['/paints']);
        swal.fire('Updated paint',`Paint ${this.paint.name} updated successfully`,'success');
      }
    )
  }


}
