
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Professeur } from 'src/app/Professeur';
import { AppService } from 'src/app/app.service';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { stage } from 'src/app/Stage';
import { Etudiant } from 'src/app/Etudiant';

@Component({
  selector: 'app-afficher-doc',
  templateUrl: './afficher-doc.component.html',
  styleUrls: ['./afficher-doc.component.css']
})
export class AfficherDocEtdComponent {

  
  profs : any[] | undefined;
  
  data: any | undefined;
  userInfo: any | Etudiant;
  nbrDemEnvProf : any | undefined;
  nbrDocs : any | undefined;

  docs : any | Document;

  
  url: string = "http://localhost:8000/";

  constructor(private service: AppService, private router: Router) { 
   
  }


  ngOnInit(): void {
    console.log(this.userInfo);

    this.service.TousDemandesEnv().subscribe(data => {

      console.log(data);

      this.docs=data[0];
      this.nbrDocs=data[1];
      console.log(data);
      this.userInfo=data[2];


 
     
    })

 
  }
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
 
  signer():void{

    window.location.replace("http://localhost:4200/signerDemande");
  }


  
  





}





   

 

