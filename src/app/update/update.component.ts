import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { DepenseService } from '../depense.service';
import {DepenseModule} from '../module/depense';




@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  currentDepense = new DepenseModule();
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private depenseService: DepenseService) { }

  ngOnInit(): void {
    this.currentDepense = this.depenseService.consulterDepense(this.activatedRoute.snapshot.params['Id']);
    console.log(this.currentDepense);
  }

  updateDepense() {
    console.log(this.currentDepense);
    this.depenseService.updateDepense(this.currentDepense);
    this.router.navigate(['']);


  }

}
