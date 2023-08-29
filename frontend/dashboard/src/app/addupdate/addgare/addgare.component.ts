import { Component, OnInit } from '@angular/core';
import { GareService } from '../../services/GareService';

import { Router } from '@angular/router';
import { Gares } from 'src/app/models/gare';
@Component({
  selector: 'app-addgare',
  templateUrl: './addgare.component.html',
  styleUrls: ['./addgare.component.scss']
})
export class AddgareComponent implements OnInit {
  gare : Gares ={
    id: 0,
    name: '',
    tel: '',
  }
  
  submitted = false;
  
  constructor(private GareService: GareService,private router: Router){}
  
  ngOnInit(): void {
  }

  saveGare():void{


this.GareService.addGares(this.gare).subscribe({
  next: (res) =>{
    console.log(res);
    this.submitted =true ;
    this.gare ={
      id: 0,
      name: '',
      tel: ''
    }
  },
  error: (e) => console.error(e)
});
alert("Ajout avec succès")
}


  goToUpdate(){
    this.router.navigate(["gare"]);
  }
  goToAdd(){
    this.router.navigate(["addgare"]);
  }
  goToBack(){
    this.router.navigate(["gare"]);
  }

}
