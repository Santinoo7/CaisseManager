import { Component, OnInit } from '@angular/core';
import { GareService } from '../services/GareService';
import { Gares } from '../models/gare';
import { HttpErrorResponse } from '@angular/common/http';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { PeriodicElement } from '../table-pagination-example/table-pagination-example.component';


@Component({
  selector: 'app-gares',
  templateUrl: './gares.component.html',
  styleUrls: ['./gares.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class GaresComponent implements OnInit{
  gares : Gares[] = [];
  displayedColumns: string[] = ['id', 'name','tel','actions'];
  dataSource?:any;


  constructor(private service: GareService,private router: Router){}

  ngOnInit(): void {
    
    
    this.service.getGares().subscribe(
     (response: Gares[])=> {
       this.gares = response;
       console.log(this.gares);
       this.dataSource = new MatTableDataSource<Gares>(this.gares);
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
  goToUpdate(data:Gares){
    this.service.setData(data);
    this.router.navigate(["updategare"]);
  }
  goToAdd(){
    this.router.navigate(["addgare"]);
  }
  goToBack(){
    this.router.navigate(["gare"]);
  }
  
  deleteGare(id:any){
    this.service.deleteGares(id).subscribe((response:any)=>{
      console.log("deleted")
    })
    alert("Deleted gare with id : " + id)
    location.reload()
  }

}

