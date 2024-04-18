import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/Etudiant';
import { Professeur } from 'src/app/Professeur';
import { stage } from 'src/app/Stage';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-prof-dashboard',
  templateUrl: './prof-dashboard.component.html',
  styleUrls: ['./prof-dashboard.component.css']
})
export class ProfDashboardComponent {

   
  data: any | undefined;

  userInfo : any | Professeur;
  nbrDemandes : any | undefined;
  nbrtousDocs : any | undefined;
  nbrStages: any | undefined;
  nouvDemandes : any | Document;
  nbrnouvDemandes : number |undefined;
  tousDocs : any | Document;
  tousStages : any | stage;
  nbrEncad :any | undefined;
  capacite: any | undefined;

  
  constructor(private service: AppService, private router: Router) { 
   
  }



  ngOnInit(): void {

    this.service.dashProf().subscribe(data => {

      console.log(data);
      this.nbrnouvDemandes=data[0];
      this.nbrStages =data[1];
      this.nbrtousDocs=data[2];
      this.nouvDemandes= data[3];
      this.tousDocs = data[4];
      this.tousStages=data[5];
      this.userInfo=data[7];
      this.nbrEncad=data[8];
      this.capacite=data[9];
      console.log(this.userInfo);
      console.log(this.tousDocs);

      console.log(this.tousDocs[0].url);

    })

 
  }

  signer():void{

    window.location.replace("http://localhost:4200/etd/repondreDemande");
  }

    //Sidebar toggle show hide function
    status = false;
    addToggle()
    {
      this.status = !this.status;       
    }
    }




 



