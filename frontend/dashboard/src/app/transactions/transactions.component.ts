import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/TransactionService';
import { Transactions } from '../models/transaction';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class TransactionsComponent implements OnInit, AfterViewInit {
  transactions: Transactions[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource?: any;


  constructor(private service: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.service.getTransactions().subscribe(
      (response: Transactions[]) => {
        this.transactions = response;
        console.log(this.transactions);
        this.dataSource = new MatTableDataSource<Transactions>(this.transactions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  goToUpdate(data: Transactions) {
    this.service.setData(data);
    this.router.navigate(["updatetransaction"]);
  }
  goToAdd() {
    this.router.navigate(["addtransaction"]);
  }
  goToBack() {
    this.router.navigate(["transaction"]);
  }

  deleteTransaction(id: any) {
    this.service.deleteTransactions(id).subscribe((response: any) => {
      console.log("deleted")
    })
    alert("Deleted transaction with id : " + id)
    location.reload()
  }

}

