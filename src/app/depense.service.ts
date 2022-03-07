import { Injectable } from '@angular/core';
import { DepenseModule } from './module/depense'

@Injectable({
  providedIn: 'root'
})
export class DepenseService {


  depense !: DepenseModule[] ;
  Depense :DepenseModule | any;
  
  
  constructor() {

    this.depense = [
      { Id: 1, depense: "dep1", prix: 10, date: new Date("01/14/2011") },
      { Id: 2, depense: "dep2", prix: 20, date: new Date("01/14/2011") },
      { Id: 3, depense: "dep3", prix: 30, date: new Date("01/14/2011") }];

  }

  listeDepense(): DepenseModule[] {
    return this.depense;
  }

  ajouterDepense(dep: DepenseModule) {
    this.depense.push(dep);
  }

  supprimerDepense(dep: DepenseModule) {
  this.depense.forEach((cur, index) => {
    if(dep.Id === cur.Id) {
    this.depense.splice(index, 1);}})}

   consulterDepense(id:number): DepenseModule{
      this.Depense = this.depense.find(depense => depense.Id == id);
      return this.Depense;
     }

  updateDepense(dep: DepenseModule) {
    // console.log(p);
    this.supprimerDepense(dep);
    this.ajouterDepense(dep);
  }
 /* somme(dep :DepenseModule []){
   var tab = [dep.length]
   var x=0;
   for (var i = 0; i < dep.length; i++){
   this.depense.forEach((element => tab[i]==(element.prix)));
   x = x + tab[i];
   } 
    return x;
   }*/
     

 }

  
  
  