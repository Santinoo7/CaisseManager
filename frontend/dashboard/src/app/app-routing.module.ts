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
import { AuthGuardService } from './AuthGuardService';
import { RoleGuardService } from './RoleGuardService';

const routes: Routes = [
  {path:"utilisateurs",component:UtilisateursComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path:"gare",component:GaresComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path:"banque",component:BanquesComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path:"caisse",component:CaissesComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path:"dashboard",component:MainComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path:"caissier",component:CaissierComponent,canActivate: [AuthGuardService]},
  {path:"addgare",component:AddgareComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path:"updategare",component:UpdategareComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path:"addcaisse",component:AddcaisseComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path:"updatecaisse",component:UpdatecaisseComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path:"addbanque",component:AddbanqueComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path:"updatebanque",component:UpdatebanqueComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path:"addutilisateur",component:AddutilisateurComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path:"updateutilisateur",component:UpdateutilisateurComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path:"addcaissier",component:AddcaissierComponent,canActivate: [AuthGuardService]},
  {path:"updatecaissier",component:UpdatecaissierComponent,canActivate: [AuthGuardService]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile",component:ProfileComponent},
  {path:"caissier",component:BoardCaissierComponent,canActivate: [AuthGuardService]},
  {path:"admin",component:BoardAdminComponent,canActivate: [AuthGuardService, RoleGuardService]},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
