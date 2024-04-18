import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Professeur } from 'src/app/Professeur';
import { AppService } from 'src/app/app.service';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { stage } from 'src/app/Stage';
import { Etudiant } from 'src/app/Etudiant';

@Component({
  selector: 'app-prof-stages',
  templateUrl: './prof-stages.component.html',
  styleUrls: ['./prof-stages.component.css']
})
export class ProfStagesComponent {
  
  profs : any[] | undefined;
  
  data: any | undefined;
  userInfo : any | Etudiant;
  nbrDemEnvProf : any | undefined;
  nbrStages : any | undefined;

  stages : any | stage;

  
  url: string = "http://localhost:8000/";

  constructor(private service: AppService, private router: Router) { 
   
  }


  ngOnInit(): void {
    console.log(this.userInfo);

    this.service.TousStagesProf().subscribe(data => {

      console.log(data);

      this.stages=data[0];
      this.nbrStages=data[1];
      this.userInfo=data[2];
      console.log(data);

 
     
    })

 
  }
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
 
  signer():void{

    window.location.replace("http://localhost:4200/prof/signerDemande");
  }


  
  




 

}


   




 





