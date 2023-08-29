import { Component, OnInit } from '@angular/core';
import { BanqueService } from '../../services/BanqueService';

import { Router } from '@angular/router';
import { Banques } from 'src/app/models/banque';
@Component({
  selector: 'app-addbanque',
  templateUrl: './addbanque.component.html',
  styleUrls: ['./addbanque.component.scss']
})
export class AddbanqueComponent implements OnInit {
  banque : Banques ={
    id: 0,
    name: '',
    compte: '',
    region: ''
  }
  
  submitted = false;
  
  constructor(private BanqueService: BanqueService,private router: Router){}
  
  ngOnInit(): void {
  }

  saveBanque():void{


this.BanqueService.addBanques(this.banque).subscribe({
  next: (res) =>{
    console.log(res);
    this.submitted =true ;
    this.banque ={
      id: 0,
      name: '',
      compte: '',
      region:''
    }
  },
  error: (e) => console.error(e)
});
alert("Ajout avec succès")
}


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
