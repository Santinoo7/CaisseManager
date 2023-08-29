import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateurs } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/UtilisateurService';

@Component({
  selector: 'app-updateutilisateur',
  templateUrl: './updateutilisateur.component.html',
  styleUrls: ['./updateutilisateur.component.scss']
})
export class UpdateutilisateurComponent implements OnInit {
  utilisateur : Utilisateurs ={
    id: 0,
    name: '',
    email: '',
    role: '',
    login: '',
    password: ''
  }
  submitted = false;


  constructor(private service: UtilisateurService,private router: Router){}

  ngOnInit(): void {
    this.utilisateur = this.service.getData();
    console.log(this.utilisateur)
  }
  
  saveUtilisateur():void{
    this.service.updateUtilisateurs(this.utilisateur).subscribe({
    next: (res) =>{
      console.log(res);
      this.submitted =true ;
      
    },
    error: (e) => console.error(e)
  });
  alert("Ajout avec succès")}

  goToUpdate(){
    this.router.navigate(["updateutilisateur"]);
  }
  goToAdd(){
    this.router.navigate(["addutilisateur"]);
  }
  goToBack(){
    this.router.navigate(["utilisateurs"]);
  }
}
