import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gares } from 'src/app/models/gare';
import { GareService } from 'src/app/services/GareService';

@Component({
  selector: 'app-updategare',
  templateUrl: './updategare.component.html',
  styleUrls: ['./updategare.component.scss']
})
export class UpdategareComponent implements OnInit {
  gare : Gares ={
    id: 0,
    name: '',
    tel: ''
  }
  submitted = false;


  constructor(private service: GareService,private router: Router){}

  ngOnInit(): void {
    this.gare = this.service.getData();
    console.log(this.gare)
  }
  
  saveGare():void{
    this.service.updateGares(this.gare).subscribe({
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
    this.router.navigate(["addgare"]);
  }
  goToBack(){
    this.router.navigate(["gare"]);
  }
}
