import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AfficheProfComponent } from './components/admin/affiche-prof/affiche-prof.component';
import { AjouterProfComponent } from './components/admin/ajouter-prof/ajouter-prof.component';
import { AjouterDocComponent } from './components/admin/ajouter-doc/ajouter-doc.component';
import { AfficherEtdsComponent } from './components/admin/afficher-etds/afficher-etds.component';
import { AjouterEtdComponent } from './components/admin/ajouter-etd/ajouter-etd.component';
import { RepondreDemandeComponent } from './components/admin/repondre-demande/repondre-demande.component';
import { SettingAdminComponent } from './components/admin/setting-admin/setting-admin.component';
import { SignerDemandeComponent } from './components/admin/signer-demande/signer-demande.component';
import { DashboardEtdComponent } from './components/etudiant/dashboard-etd/dashboard-etd.component';
import { AfficherDocEtdComponent } from './components/etudiant/afficher-docEtd/afficher-doc.component';
import { AfficherProfComponent } from './components/etudiant/afficher-profEtd/afficher-prof.component';
import { AfficherMesStagesComponent } from './components/etudiant/afficher-mes-stages/afficher-mes-stages.component';
import { EnvoyerDemandeComponent } from './components/etudiant/envoyer-demande/envoyer-demande.component';
import { ModifierEtdComponent } from './components/etudiant/modifier-etd/modifier-etd.component';
import { RepondreDemandeEtdComponent } from './components/etudiant/repondre-demande-etd/repondre-demande-etd.component';
import { SignerDemandeEtdComponent } from './components/etudiant/signer-demande-etd/signer-demande-etd.component';
import { ProfDashboardComponent } from './components/professeur/prof-dashboard/prof-dashboard.component';
import { ProfDemandesComponent } from './components/professeur/prof-demandes/prof-demandes.component';
import { ProfStagesComponent } from './components/professeur/prof-stages/prof-stages.component';
import { ModifierProfComponent } from './components/professeur/modifier-prof/modifier-prof.component';
import { SignerDemandeProfComponent } from './components/professeur/signer-demandeProf/signer-demande.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    LoginComponent,
    AfficheProfComponent,
    AjouterProfComponent,
    AjouterDocComponent,
    AfficherEtdsComponent,
    AjouterEtdComponent,
    RepondreDemandeComponent,
    SettingAdminComponent,
    SignerDemandeComponent,
    DashboardEtdComponent,
    AfficherDocEtdComponent,
    AfficherProfComponent,
    AfficherMesStagesComponent,
    EnvoyerDemandeComponent,
    ModifierEtdComponent,
    RepondreDemandeEtdComponent,
    SignerDemandeEtdComponent,
    ProfDashboardComponent,
    ProfDemandesComponent,
    ProfStagesComponent,
    ModifierProfComponent,
    SignerDemandeProfComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
