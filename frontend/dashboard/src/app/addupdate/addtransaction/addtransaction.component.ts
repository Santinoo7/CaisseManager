import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/TransactionService';

import { Router } from '@angular/router';
import { Transactions } from 'src/app/models/transaction';
@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.scss']
})
export class AddtransactionComponent implements OnInit {
  transaction : Transactions ={
    id: 0,
    name: '',
  }
  
  submitted = false;
  
  constructor(private TransactionService: TransactionService,private router: Router){}
  
  ngOnInit(): void {
  }

  saveTransaction():void{


this.TransactionService.addTransactions(this.transaction).subscribe({
  next: (res) =>{
    console.log(res);
    this.submitted =true ;
    this.transaction ={
      id: 0,
      name: '',
  
    }
  },
  error: (e) => console.error(e)
});
alert("Ajout avec succès")
}


  goToUpdate(){
    this.router.navigate(["transaction"]);
  }
  goToAdd(){
    this.router.navigate(["addtransaction"]);
  }
  goToBack(){
    this.router.navigate(["transaction"]);
  }

}
