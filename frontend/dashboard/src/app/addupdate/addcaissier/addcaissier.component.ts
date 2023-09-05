import { Component, OnInit } from '@angular/core';
import { CaissierService } from '../../services/CaissierService';

import { Router } from '@angular/router';
import { Caissier } from 'src/app/models/caissier';
import { Transactions } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/TransactionService';
@Component({
  selector: 'app-addcaissier',
  templateUrl: './addcaissier.component.html',
  styleUrls: ['./addcaissier.component.scss']
})
export class AddcaissierComponent implements OnInit {
  transactionsList!:Transactions[];


  caissier : Caissier ={
    id: 0,
    description: '',
    montant: '',
    date: new Date(),
    transaction: new Transactions("","")
  }
  
  submitted = false;
  
  constructor(private CaissierService: CaissierService,private router: Router,private transactionService:TransactionService){}
  
  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((res)=>{
      this.transactionsList = res;
      console.log(this.transactionsList)
    })
  }

  saveCaissier():void{
this.CaissierService.addCaissier(this.caissier).subscribe({
  next: (res) =>{
    console.log(res);
    this.submitted =true ;
    this.caissier ={
      id: 0,
      description: '',
      montant: '',
      date: new Date(),
      transaction: new Transactions("","")
    }
  },
  error: (e) => console.error(e)
});

console.log(this.caissier)
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
