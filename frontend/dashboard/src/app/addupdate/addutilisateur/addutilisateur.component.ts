import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../services/UtilisateurService';

import { Router } from '@angular/router';
import { Utilisateurs } from 'src/app/models/utilisateur';
@Component({
  selector: 'app-addutilisateur',
  templateUrl: './addutilisateur.component.html',
  styleUrls: ['./addutilisateur.component.scss']
})
export class AddutilisateurComponent implements OnInit {
  utilisateur : Utilisateurs ={
    id: 0,
    name: '',
    email: '',
    role: '',
    login: '',
    password: ''
  }
  
  submitted = false;
  
  constructor(private UtilisateurService: UtilisateurService,private router: Router){}
  
  ngOnInit(): void {
  }

  saveUtilisateur():void{


this.UtilisateurService.addUtilisateurs(this.utilisateur).subscribe({
  next: (res) =>{
    console.log(res);
    this.submitted =true ;
    this.utilisateur ={
      id: 0,
      name: '',
      email: '',
      role:'',
      login:'',
      password:''
    }
  },
  error: (e) => console.error(e)
});
alert("Ajout avec succès")
}


  goToUpdate(){
    this.router.navigate(["utilisateur"]);
  }
  goToAdd(){
    this.router.navigate(["addutilisateur"]);
  }
  goToBack(){
    this.router.navigate(["utilisateur"]);
  }

}
