import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caissier } from 'src/app/models/caissier';
import { Transactions } from 'src/app/models/transaction';
import { CaissierService } from 'src/app/services/CaissierService';

@Component({
  selector: 'app-updatecaissier',
  templateUrl: './updatecaissier.component.html',
  styleUrls: ['./updatecaissier.component.scss']
})
export class UpdatecaissierComponent implements OnInit {
  caissier : Caissier ={
    id: 0,
    description: '',
    montant: '',
    date: new Date(),
    transaction: new Transactions("1","name")
  }
  submitted = false;


  constructor(private service: CaissierService,private router: Router){}

  ngOnInit(): void {
    this.caissier = this.service.getData();
    console.log(this.caissier)
  }
  
  saveCaissier():void{
    this.service.updateCaissier(this.caissier).subscribe({
    next: (res) =>{
      console.log(res);
      this.submitted =true ;
      
    },
    error: (e) => console.error(e)
  });
  alert("Ajout avec succès")}

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
