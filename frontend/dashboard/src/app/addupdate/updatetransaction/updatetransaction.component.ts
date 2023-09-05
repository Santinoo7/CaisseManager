import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transactions } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/TransactionService';

@Component({
  selector: 'app-updatetransaction',
  templateUrl: './updatetransaction.component.html',
  styleUrls: ['./updatetransaction.component.scss']
})
export class UpdatetransactionComponent implements OnInit {
  transaction : Transactions ={
    id: 0,
    name: '',
  }
  submitted = false;


  constructor(private service: TransactionService,private router: Router){}

  ngOnInit(): void {
    this.transaction = this.service.getData();
    console.log(this.transaction)
  }
  
  saveTransaction():void{
    this.service.updateTransactions(this.transaction).subscribe({
    next: (res) =>{
      console.log(res);
      this.submitted =true ;
      
    },
    error: (e) => console.error(e)
  });
  alert("Ajout avec succès")}

  goToUpdate(){
    this.router.navigate(["caisse"]);
  }
  goToAdd(){
    this.router.navigate(["addtransaction"]);
  }
  goToBack(){
    this.router.navigate(["transaction"]);
  }
}
