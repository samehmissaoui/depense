import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

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
      map (value => value === 15?
        this.disable=0:value
         ))
      // console.log(  this.compteur$.subscribe(value => console.log(value)));
  }

}
