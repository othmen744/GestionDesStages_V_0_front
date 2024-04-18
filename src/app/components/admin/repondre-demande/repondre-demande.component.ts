
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/Etudiant';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-repondre-demande',
  templateUrl: './repondre-demande.component.html',
  styleUrls: ['./repondre-demande.component.css']
})
export class RepondreDemandeComponent {

  
  data: any | undefined;

  userInfo : any =this.service.recupDonnees;
  doc : any | Document;
  etd : any | Etudiant;
  nbrnouvDemandes : any | undefined;


  
  
  constructor(private service: AppService, private router: Router) { 
   
  }



  ngOnInit(): void {
    console.log(this.userInfo);

    this.service.afficherDemande().subscribe(data => {

      console.log(data);
      this.doc=data[0][0];
      this.etd =data[1];
      this.nbrnouvDemandes=data[2];
    
      console.log(this.doc);
      console.log(this.etd);
      
    })

 
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





