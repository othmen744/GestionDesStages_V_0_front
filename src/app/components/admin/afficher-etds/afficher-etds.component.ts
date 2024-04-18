import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Administrateur } from 'src/app/Administrateur';
import { Etudiant } from 'src/app/Etudiant';
import { Professeur } from 'src/app/Professeur';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-afficher-etds',
  templateUrl: './afficher-etds.component.html',
  styleUrls: ['./afficher-etds.component.css']
})
export class AfficherEtdsComponent {

  etds : any[] | undefined;
  
  data: any | undefined;
  userInfo: any | Administrateur;
  listeEtdsDem: any | Document;
  nbrDemEnvEtd : any | undefined;
  nbrProfs : any | undefined;
  nbrEtds: any | undefined;
  nbrNouvDem: any | undefined;

  tousEtds : any | Etudiant;

  
  url: string = "http://localhost:8000/";

  constructor(private service: AppService, private router: Router) { 
   
  }


  
  ngOnInit(): void {

    this.service.TousEtds().subscribe(data => {

      console.log(data);
      this.listeEtdsDem=data[0];
      this.nbrDemEnvEtd =data[1];
      this.nbrProfs=data[2];
      this.nbrEtds=data[3];
      this.tousEtds=data[4];
      this.nbrNouvDem=data[5];
      this.userInfo=data[6];

 
     
    })

 
  }


  
  supprimerEtd(id: number){
    this.service.supprimerEtd(id).subscribe(data => {
      this.etds = this.etds?.filter(etd => etd.cin_etd !== id);
      
    })

    window.alert("L'etudiant a été supprimé avec succès");
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

     
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
  

}






 




