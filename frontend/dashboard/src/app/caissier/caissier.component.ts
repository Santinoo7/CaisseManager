import { Component, OnInit } from '@angular/core';
import { CaissierService } from '../services/CaissierService';
import { Caissier } from '../models/caissier';
import { HttpErrorResponse } from '@angular/common/http';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-caissier',
  templateUrl: './caissier.component.html',
  styleUrls: ['./caissier.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class CaissierComponent implements OnInit{
  caissier : Caissier[] = [];
  displayedColumns: string[] = ['id', 'name','code','actions'];
  dataSource?:any;

  constructor(private service: CaissierService,private router: Router){}

  ngOnInit(): void {
    this.service.getCaissier().subscribe(
     (response: Caissier[])=> {
       this.caissier = response;
       console.log(this.caissier);
       this.dataSource = new MatTableDataSource<Caissier>(this.caissier);
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
  goToUpdate(data:Caissier){
    this.service.setData(data);
    this.router.navigate(["updatecaissier"]);
  }
  goToAdd(){
    this.router.navigate(["addcaissier"]);
  }
  goToBack(){
    this.router.navigate(["caissier"]);
  }
  
  deleteCaissier(id:any){
    this.service.deleteCaissier(id).subscribe((response:any)=>{
      console.log("deleted")
    })
    alert("Deleted caissier with id : " + id)
    location.reload()
  }

}