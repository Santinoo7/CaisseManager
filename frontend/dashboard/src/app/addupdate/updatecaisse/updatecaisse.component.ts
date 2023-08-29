import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caisses } from 'src/app/models/caisse';
import { CaisseService } from 'src/app/services/CaisseService';

@Component({
  selector: 'app-updatecaisse',
  templateUrl: './updatecaisse.component.html',
  styleUrls: ['./updatecaisse.component.scss']
})
export class UpdatecaisseComponent implements OnInit {
  caisse : Caisses ={
    id: 0,
    name: '',
    sold: ''
  }
  submitted = false;


  constructor(private service: CaisseService,private router: Router){}

  ngOnInit(): void {
    this.caisse = this.service.getData();
    console.log(this.caisse)
  }
  
  saveCaisse():void{
    this.service.updateCaisses(this.caisse).subscribe({
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
    this.router.navigate(["addcaisse"]);
  }
  goToBack(){
    this.router.navigate(["caisse"]);
  }
}
