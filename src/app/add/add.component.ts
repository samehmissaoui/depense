import { Component, OnInit } from '@angular/core';
import {DepenseModule} from '../module/depense';
import { DepenseService } from '../depense.service';
import { ActivatedRoute ,Router} from '@angular/router';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newDepense = new DepenseModule();

  constructor(private depenseService: DepenseService ,private router: Router) {  }

  ngOnInit(): void {
    
  }
  addDepense(){
    // console.log(this.newDepense);
    this.depenseService.ajouterDepense(this.newDepense)
    this.router.navigate(['']);
    }

    

}
