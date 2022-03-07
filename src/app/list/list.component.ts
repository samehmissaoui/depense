import { Component, OnInit } from '@angular/core';
import {DepenseModule} from '../module/depense';
import { DepenseService } from '../depense.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  depense !:DepenseModule [] ;
  

  constructor(private depenseService: DepenseService ) {
    this.depense = depenseService.listeDepense();
    }
    supprimerDepense(d:DepenseModule )
    {
      let conf = confirm("Etes-vous sûr ?");
    if (conf){

    console.log(d);
    this.depenseService.supprimerDepense(d);
    }}
  ngOnInit(): void {
  }
  
 /* sommeDepense( ) {
    console.log(this.depenseService.somme())
    }*/
  
}
