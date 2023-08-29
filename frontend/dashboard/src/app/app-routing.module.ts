import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { GaresComponent } from './gares/gares.component';
import { BanquesComponent } from './banques/banques.component';
import { CaissesComponent } from './caisses/caisses.component';
import { AddgareComponent } from './addupdate/addgare/addgare.component';
import { UpdategareComponent } from './addupdate/updategare/updategare.component';
import { AddcaisseComponent } from './addupdate/addcaisse/addcaisse.component';
import { UpdatecaisseComponent } from './addupdate/updatecaisse/updatecaisse.component';
import { AddbanqueComponent } from './addupdate/addbanque/addbanque.component';
import { UpdatebanqueComponent } from './addupdate/updatebanque/updatebanque.component';
import { AddutilisateurComponent } from './addupdate/addutilisateur/addutilisateur.component';
import { UpdateutilisateurComponent } from './addupdate/updateutilisateur/updateutilisateur.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardCaissierComponent } from './board-caissier/board-caissier.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { CaissierComponent } from './caissier/caissier.component';
import { AddcaissierComponent } from './addupdate/addcaissier/addcaissier.component';
import { UpdatecaissierComponent } from './addupdate/updatecaissier/updatecaissier.component';

const routes: Routes = [
  {path:"utilisateurs",component:UtilisateursComponent},
  {path:"gare",component:GaresComponent},
  {path:"banque",component:BanquesComponent},
  {path:"caisse",component:CaissesComponent},
  {path:"dashboard",component:MainComponent},
  {path:"caissier",component:CaissierComponent},
  {path:"addgare",component:AddgareComponent},
  {path:"updategare",component:UpdategareComponent},
  {path:"addcaisse",component:AddcaisseComponent},
  {path:"updatecaisse",component:UpdatecaisseComponent},
  {path:"addbanque",component:AddbanqueComponent},
  {path:"updatebanque",component:UpdatebanqueComponent},
  {path:"addutilisateur",component:AddutilisateurComponent},
  {path:"updateutilisateur",component:UpdateutilisateurComponent},
  {path:"addcaissier",component:AddcaissierComponent},
  {path:"updatecaissier",component:UpdatecaissierComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile",component:ProfileComponent},
  {path:"caissier",component:BoardCaissierComponent},
  {path:"admin",component:BoardAdminComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
