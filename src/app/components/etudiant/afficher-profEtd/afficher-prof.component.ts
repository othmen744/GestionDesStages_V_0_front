
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Professeur } from 'src/app/Professeur';
import { AppService } from 'src/app/app.service';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Etudiant } from 'src/app/Etudiant';


@Component({
  selector: 'app-afficher-prof',
  templateUrl: './afficher-prof.component.html',
  styleUrls: ['./afficher-prof.component.css']
})
export class AfficherProfComponent {

  

  profs : any[] | undefined;
  
  data: any | undefined;
  userInfo : any | Etudiant;
  listeProfsDem: any | Document;
  nbrDemEnvProf : any | undefined;
  nbrProfs : any | undefined;
  nbrDocs: any | undefined;
  nbrNouvDem: any | undefined;

  tousProfs : any | Professeur;

  
  url: string = "http://localhost:8000/";

  constructor(private service: AppService, private router: Router) { 
   
  }


  ngOnInit(): void {
    console.log(this.userInfo);

    this.service.TousProfsEtds().subscribe(data => {

      console.log(data);
      this.listeProfsDem=data[0];
      this.nbrDemEnvProf =data[1];
      this.nbrProfs=data[2];
      this.nbrDocs=data[3];
      this.tousProfs=data[4];
      console.log(data[4]);
      this.nbrNouvDem=data[5];
      this.userInfo=data[6];

 
     
    })

 
  }
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
 
  supprimerProf(id: number){
    this.service.supprimerProf(id).subscribe(data => {
      this.profs = this.profs?.filter(prof => prof.cin_prof !== id);
      
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);

      
  
  }

  
  signer():void{

    window.location.replace("http://localhost:4200/etd/signerDemande");
  }


  
  //Sidebar toggle show hide function
  

  
  modifierProf(id: number){
    this.router.navigate(['update', id]);
  }
 





 




}
