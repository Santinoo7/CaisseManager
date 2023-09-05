import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablePaginationExample } from './table-pagination-example/table-pagination-example.component';
import { GaresComponent } from './gares/gares.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { CaissesComponent } from './caisses/caisses.component';
import { BanquesComponent } from './banques/banques.component';
import { HttpClientModule } from '@angular/common/http';
import { AddgareComponent } from './addupdate/addgare/addgare.component';
import { UpdategareComponent } from './addupdate/updategare/updategare.component';
import { AddbanqueComponent } from './addupdate/addbanque/addbanque.component';
import { UpdatebanqueComponent } from './addupdate/updatebanque/updatebanque.component';
import { AddcaisseComponent } from './addupdate/addcaisse/addcaisse.component';
import { UpdatecaisseComponent } from './addupdate/updatecaisse/updatecaisse.component';
import { AddutilisateurComponent } from './addupdate/addutilisateur/addutilisateur.component';
import { UpdateutilisateurComponent } from './addupdate/updateutilisateur/updateutilisateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CaissierComponent } from './caissier/caissier.component';
import { AddcaissierComponent } from './addupdate/addcaissier/addcaissier.component';
import { UpdatecaissierComponent } from './addupdate/updatecaissier/updatecaissier.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { httpInterceptorProviders } from './_helpers/auth.interceptor';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddtransactionComponent } from './addupdate/addtransaction/addtransaction.component';
import { UpdatetransactionComponent } from './addupdate/updatetransaction/updatetransaction.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SideNavComponent,
    TopWidgetsComponent,
    AddgareComponent,
    UpdategareComponent,
    AddbanqueComponent,
    UpdatebanqueComponent,
    AddcaisseComponent,
    UpdatecaisseComponent,
    AddutilisateurComponent,
    UpdateutilisateurComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AddcaissierComponent,
    UpdatecaissierComponent,
    AddtransactionComponent,
    UpdatetransactionComponent
    
    
 
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    TablePaginationExample,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
