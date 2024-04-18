import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class DashboardAdminComponent {


  data: any | undefined;

  userInfo : any =this.service.recupDonnees;
  nbrDemandes : any | undefined;
  nbrProfs : any | undefined;
  nbrEtds: any | undefined;

  nouvDemandes : any | Document;

  nbrnouvDemandes : number |undefined;
  tousDocs : any | Document;

  
  constructor(private service: AppService, private router: Router) { 
   
  }



  ngOnInit(): void {
    console.log(this.userInfo);

    this.service.dash().subscribe(data => {

      console.log(data);
      this.nbrDemandes=data[0];
      this.nbrProfs =data[1];
      this.nbrEtds=data[2];
      this.nouvDemandes= data[3];
      this.nbrnouvDemandes=data[5]
      console.log(this.nouvDemandes);
      this.tousDocs=data[4];
      console.log(this.tousDocs);
      this.userInfo=data[6];


      console.log(this.tousDocs[0].url);

    })

 
  }

  signer():void{

    window.location.replace("http://localhost:4200/repondreDemande");
  }

    //Sidebar toggle show hide function
    status = false;
    addToggle()
    {
      this.status = !this.status;       
    }
    }