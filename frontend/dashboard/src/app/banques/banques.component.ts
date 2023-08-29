import { Component, OnInit } from '@angular/core';
import { BanqueService } from '../services/BanqueService';
import { Banques } from '../models/banque';
import { HttpErrorResponse } from '@angular/common/http';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-banques',
  templateUrl: './banques.component.html',
  styleUrls: ['./banques.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class BanquesComponent implements OnInit{
  banques : Banques[] = [];
  displayedColumns: string[] = ['id', 'name','compte','region','actions'];
  dataSource?:any;

  constructor(private service: BanqueService,private router: Router){}

  ngOnInit(): void {
    this.service.getBanques().subscribe(
     (response: Banques[])=> {
       this.banques = response;
       console.log(this.banques);
       this.dataSource = new MatTableDataSource<Banques>(this.banques);
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
  goToUpdate(data:Banques){
    this.service.setData(data);
    this.router.navigate(["updatebanque"]);
  }
  goToAdd(){
    this.router.navigate(["addbanque"]);
  }
  goToBack(){
    this.router.navigate(["banque"]);
  }
  
  deleteBanque(id:any){
    this.service.deleteBanques(id).subscribe((response:any)=>{
      console.log("deleted")
    })
    alert("Deleted banque with id : " + id)
    location.reload()
  }

}