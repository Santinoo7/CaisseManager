import { Component, OnInit } from '@angular/core';
import { CaisseService } from '../services/CaisseService';
import { Caisses } from '../models/caisse';
import { HttpErrorResponse } from '@angular/common/http';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-caisses',
  templateUrl: './caisses.component.html',
  styleUrls: ['./caisses.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class CaissesComponent implements OnInit{
  caisses : Caisses[] = [];
  displayedColumns: string[] = ['id', 'name','sold','actions'];
  dataSource?:any;

  constructor(private service: CaisseService,private router: Router){}

  ngOnInit(): void {
    this.service.getCaisses().subscribe(
     (response: Caisses[])=> {
       this.caisses = response;
       console.log(this.caisses);
       this.dataSource = new MatTableDataSource<Caisses>(this.caisses);
     },
     (error:HttpErrorResponse)=> {
       alert(error.message);
     }
   );
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  goToUpdate(data:Caisses){
    this.service.setData(data);
    this.router.navigate(["updatecaisse"]);
  }
  goToAdd(){
    this.router.navigate(["addcaisse"]);
  }
  goToBack(){
    this.router.navigate(["caisse"]);
  }
  
  deleteCaisse(id:any){
    this.service.deleteCaisses(id).subscribe((response:any)=>{
      console.log("deleted")
    })
    alert("Deleted caisse with id : " + id)
    location.reload()
  }

}