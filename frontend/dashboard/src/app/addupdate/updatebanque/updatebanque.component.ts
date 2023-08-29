import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banques } from 'src/app/models/banque';
import { BanqueService } from 'src/app/services/BanqueService';

@Component({
  selector: 'app-updatebanque',
  templateUrl: './updatebanque.component.html',
  styleUrls: ['./updatebanque.component.scss']
})
export class UpdatebanqueComponent implements OnInit {
  banque : Banques ={
    id: 0,
    name: '',
    compte: '',
    region: ''
  }
  submitted = false;


  constructor(private service: BanqueService,private router: Router){}

  ngOnInit(): void {
    this.banque = this.service.getData();
    console.log(this.banque)
  }
  
  saveBanque():void{
    this.service.updateBanques(this.banque).subscribe({
    next: (res) =>{
      console.log(res);
      this.submitted =true ;
      
    },
    error: (e) => console.error(e)
  });
  alert("Ajout avec succès")}

  goToUpdate(){
    this.router.navigate(["updatebanque"]);
  }
  goToAdd(){
    this.router.navigate(["addbanque"]);
  }
  goToBack(){
    this.router.navigate(["banque"]);
  }
}
