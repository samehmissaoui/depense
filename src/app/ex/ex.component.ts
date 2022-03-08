import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-ex',
  templateUrl: './ex.component.html',
  styleUrls: ['./ex.component.css']
})
export class ExComponent implements OnInit {
  compteur$ !:Observable<any>;
  constructor() { }
disable : number=1
  ngOnInit(): void {

    this.compteur$= interval (1000).pipe(
      take(11),

      map (value => value === 10?
        this.disable=0:value
         ))
      // console.log(  this.compteur$.subscribe(value => console.log(value)));
  }

}
