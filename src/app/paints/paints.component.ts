import { Component, OnInit } from '@angular/core';
import {Paint} from './paint';
import {PaintService} from "./paint.service";
import swal from 'sweetalert2';

@Component({
  selector: 'app-paints',
  templateUrl: './paints.component.html',
  styleUrls: ['./paints.component.css']
})
export class PaintsComponent implements OnInit {
  paints: Paint[];

  constructor(private paintService: PaintService) { }

  ngOnInit(): void {
    this.paintService.getPaints().subscribe(
      (paints) => this.paints = paints
    );
  }

  delete(paint:Paint):void{
    swal.fire({
      title: 'Are you sure?',
      text: 'You are going to delete the paint ' + paint.name + '-' + paint.brand,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        this.paintService.delete(paint.id).subscribe(
          response => {
          this.paints = this.paints.filter(p => p !== paint)
          swal.fire(
            'Deleted!',
            'Paint ' + paint.name + '-' + paint.brand + ' deleted successfully',
            'success'
          )}
        );
      }
    })
  }
}
