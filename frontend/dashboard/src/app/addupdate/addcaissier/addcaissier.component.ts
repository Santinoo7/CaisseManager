import { Component, OnInit } from '@angular/core';
import { CaissierService } from '../../services/CaissierService';

import { Router } from '@angular/router';
import { Caissier } from 'src/app/models/caissier';
@Component({
  selector: 'app-addcaissier',
  templateUrl: './addcaissier.component.html',
  styleUrls: ['./addcaissier.component.scss']
})
export class AddcaissierComponent implements OnInit {
  caissier : Caissier ={
    id: 0,
    name: '',
    code: ''
  }
  
  submitted = false;
  
  constructor(private CaissierService: CaissierService,private router: Router){}
  
  ngOnInit(): void {
  }

  saveCaissier():void{


this.CaissierService.addCaissier(this.caissier).subscribe({
  next: (res) =>{
    console.log(res);
    this.submitted =true ;
    this.caissier ={
      id: 0,
      name: '',
      code: ''
    }
  },
  error: (e) => console.error(e)
});
alert("Ajout avec succès")
}


  goToUpdate(){
    this.router.navigate(["caissier"]);
  }
  goToAdd(){
    this.router.navigate(["addcaissier"]);
  }
  goToBack(){
    this.router.navigate(["caissier"]);
  }

}
