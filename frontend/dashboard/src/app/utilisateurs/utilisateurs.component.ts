import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/UtilisateurService';
import { Utilisateurs } from '../models/utilisateur';
import { HttpErrorResponse } from '@angular/common/http';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class UtilisateursComponent implements OnInit{
  utilisateurs : Utilisateurs[] = [];
  displayedColumns: string[] = ['id', 'name','email','login','password','actions'];
  dataSource?:any;

  constructor(private service: UtilisateurService,private router: Router){}

  ngOnInit(): void {
    this.service.getUtilisateurs().subscribe(
     (response: Utilisateurs[])=> {
       this.utilisateurs = response;
       console.log(this.utilisateurs);
       this.dataSource = new MatTableDataSource<Utilisateurs>(this.utilisateurs);
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
  goToUpdate(data:Utilisateurs){
    this.service.setData(data);
    this.router.navigate(["updateutilisateur"]);
  }
  goToAdd(){
    this.router.navigate(["addutilisateur"]);
  }
  goToBack(){
    this.router.navigate(["utilisateur"]);
  }
  
  deleteUtilisateur(id:any){
    this.service.deleteUtilisateurs(id).subscribe((response:any)=>{
      console.log("deleted")
    })
    alert("Deleted utilisateur with id : " + id)
    location.reload()
  }

}