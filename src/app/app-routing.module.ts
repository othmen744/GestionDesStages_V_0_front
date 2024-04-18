import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficheProfComponent } from './components/admin/affiche-prof/affiche-prof.component';
import { AjouterProfComponent } from './components/admin/ajouter-prof/ajouter-prof.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { AjouterDocComponent } from './components/admin/ajouter-doc/ajouter-doc.component';
import { AfficherEtdsComponent } from './components/admin/afficher-etds/afficher-etds.component';
import { AjouterEtdComponent } from './components/admin/ajouter-etd/ajouter-etd.component';
import { RepondreDemandeComponent } from './components/admin/repondre-demande/repondre-demande.component';
import { SettingAdminComponent } from './components/admin/setting-admin/setting-admin.component';
import { SignerDemandeComponent } from './components/admin/signer-demande/signer-demande.component';
import { AfficherDocEtdComponent } from './components/etudiant/afficher-docEtd/afficher-doc.component';
import { AfficherProfComponent } from './components/etudiant/afficher-profEtd/afficher-prof.component';
import { DashboardEtdComponent } from './components/etudiant/dashboard-etd/dashboard-etd.component';
import { AfficherMesStagesComponent } from './components/etudiant/afficher-mes-stages/afficher-mes-stages.component';
import { ModifierEtdComponent } from './components/etudiant/modifier-etd/modifier-etd.component';
import { RepondreDemandeEtdComponent } from './components/etudiant/repondre-demande-etd/repondre-demande-etd.component';
import { SignerDemandeEtdComponent } from './components/etudiant/signer-demande-etd/signer-demande-etd.component';
import { ModifierProfComponent } from './components/professeur/modifier-prof/modifier-prof.component';
import { ProfDashboardComponent } from './components/professeur/prof-dashboard/prof-dashboard.component';
import { ProfDemandesComponent } from './components/professeur/prof-demandes/prof-demandes.component';
import { ProfStagesComponent } from './components/professeur/prof-stages/prof-stages.component';
import { RepondreDemandeProfComponent } from './components/professeur/repondre-demandeProf/repondre-demande.component';
import { SignerDemandeProfComponent } from './components/professeur/signer-demandeProf/signer-demande.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'adminDashboard/10000000', component:DashboardAdminComponent},
  {path:'adminDashboard/10000000/afficherProfs', component: AfficheProfComponent},
  { path: 'adminDashboard/10000000/ajouterProf', component: AjouterProfComponent },
  {path:'adminDashboard/10000000/ajouterDoc',component:AjouterDocComponent},
  {path:'adminDashboard/10000000/afficherEtds', component:AfficherEtdsComponent},
  { path: 'adminDashboard/10000000/ajouterEtd', component: AjouterEtdComponent },
  {path:'repondreDemande', component:RepondreDemandeComponent},
  {path:'signerDemande',component:SignerDemandeComponent},
  {path:'adminDashboard/10000000/settingAdmin',component:SettingAdminComponent},
  {path:'etdDashboard/afficherDocs', component:AfficherDocEtdComponent},
  {path:'etdDashboard/afficherProfs', component:AfficherProfComponent},
  {path:'etdDashboard', component:DashboardEtdComponent},
  {path:'etdDashboard/afficherStages', component:AfficherMesStagesComponent},
  {path:'etdDashboard/envoyerDemande', component:SignerDemandeComponent},
  {path:'etdDashboard/modifierEtd', component:ModifierEtdComponent},
  {path:'etd/repondreDemande', component:  RepondreDemandeEtdComponent},
  {path:'etd/signerDemande', component:  SignerDemandeEtdComponent},
  {path:'prof/modifierProf', component:  ModifierProfComponent},
  {path:'profDashboard', component:  ProfDashboardComponent},
  {path:'prof/afficherDem', component:  ProfDemandesComponent},
  {path:'prof/afficherStages', component:  ProfStagesComponent},
  {path:'prof/repondreDemande', component: RepondreDemandeProfComponent},
  {path:'prof/signerDemande', component:  SignerDemandeProfComponent},

  

  

  




  


  




  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


