import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/Etudiant';
import { Professeur } from 'src/app/Professeur';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-prof-demandes',
  templateUrl: './prof-demandes.component.html',
  styleUrls: ['./prof-demandes.component.css']
})
export class ProfDemandesComponent {
  
  data: any | undefined;

  userInfo : any =this.service.recupDonnees;
  doc : any | Document;
  prof : any | Professeur;
  nbrnouvDemandes : any | undefined;
  nbrEncad :any | undefined;
  capacite: any | undefined;


  
  
  constructor(private service: AppService, private router: Router) { 
   
  }



  ngOnInit(): void {
    console.log(this.userInfo);

    this.service.afficherDemandeProf().subscribe(data => {

      console.log(data);
      this.doc=data[0];
      this.nbrnouvDemandes=data[1];
      this.nbrEncad=data[2];
      this.capacite=data[3];
    
      console.log(this.doc);
      
    })

 
  }


  redirection():void{

    if (this.capacite == this.nbrEncad){

      window.alert("Vous avez atteint VOTRE CAPACITE !");
       window.location.href = 'http://localhost:4200/profDashboard';


    }

    else 

    window.location.href = 'http://localhost:4200/prof/signerDemande'; // Redirection vers l'URL souhaitée


  }

  signer():void{

    window.location.replace("https://dochub.com/");
  }

    //Sidebar toggle show hide function
    status = false;
    addToggle()
    {
      this.status = !this.status;       
    }
    }












  