import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, take, tap } from 'rxjs';
@Component({
  selector: 'app-cours-rxjs',
  templateUrl: './cours-rxjs.component.html',
  styleUrls: ['./cours-rxjs.component.css']
})
export class CoursRxjsComponent implements OnInit {
  compteur$ !:Observable<string>;
  compteur1$ !:Observable<number>;
  constructor() { }
  ngOnInit(): void {
    this.compteur1$= interval (1000)
    // console.log(this.compteur$.subscribe(todo=>console.log('001')))
    // console.log(  this.compteur$.subscribe(value => console.log(value)));
    // setTimeout(() =>this.compteur$.subscribe(value => console.log(value)),10000 );
    this.compteur$= interval (1000).pipe( 
      take(10),
  // map (value => value % 2==0 ?
  //   ` ${value} paire`:
  //    `${value} impaire`
  //   ) )
     filter (value => value % 3===0 ),
  // filter (value => value >=10 ),
    map (value => value % 2==0 ?
      ` ${value} paire`:
       `${value} impaire`
      ),
      tap(moy=>this.result(moy) ))
    //  tap(x=>this.somme(x)))
 }
 s:number=0
 somme(x:number):number{
   return this.s=5+x
 }
  result(text:string){
    console.log(text)
    }
}
