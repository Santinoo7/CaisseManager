import { Component, OnInit } from '@angular/core';
import { CaisseService } from '../../services/CaisseService';

import { Router } from '@angular/router';
import { Caisses } from 'src/app/models/caisse';
@Component({
  selector: 'app-addcaisse',
  templateUrl: './addcaisse.component.html',
  styleUrls: ['./addcaisse.component.scss']
})
export class AddcaisseComponent implements OnInit {
  caisse : Caisses ={
    id: 0,
    name: '',
    sold: ''
  }
  
  submitted = false;
  
  constructor(private CaisseService: CaisseService,private router: Router){}
  
  ngOnInit(): void {
  }

  saveCaisse():void{


this.CaisseService.addCaisses(this.caisse).subscribe({
  next: (res) =>{
    console.log(res);
    this.submitted =true ;
    this.caisse ={
      id: 0,
      name: '',
      sold: ''
    }
  },
  error: (e) => console.error(e)
});
alert("Ajout avec succès")
}


  goToUpdate(){
    this.router.navigate(["caisse"]);
  }
  goToAdd(){
    this.router.navigate(["addcaisse"]);
  }
  goToBack(){
    this.router.navigate(["caisse"]);
  }

}
