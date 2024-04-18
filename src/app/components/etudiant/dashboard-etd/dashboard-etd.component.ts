
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/Etudiant';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-dashboard-etd',
  templateUrl: './dashboard-etd.component.html',
  styleUrls: ['./dashboard-etd.component.css']
})
export class DashboardEtdComponent {

  
  data: any | undefined;

  userInfo : any | Etudiant;
  nbrDemandes : any | undefined;
  nbrProfs : any | undefined;
  nbrDocs: any | undefined;

  nouvDemandes : any | Document;

  nbrnouvDemandes : number |undefined;
  tousDocs : any | Document;

  
  constructor(private service: AppService, private router: Router) { 
   
  }



  ngOnInit(): void {

    this.service.dashEtd().subscribe(data => {

      console.log(data);
      this.nbrDemandes=data[0];
      this.nbrProfs =data[1];
      this.nbrDocs=data[2];
      this.nouvDemandes= data[3];
      this.nbrnouvDemandes=data[5]
      console.log(this.nouvDemandes);
      this.tousDocs=data[4];
      this.userInfo=data[6];
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



