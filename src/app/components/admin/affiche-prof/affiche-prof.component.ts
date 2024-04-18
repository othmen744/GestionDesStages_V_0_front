import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Professeur } from 'src/app/Professeur';
import { AppService } from 'src/app/app.service';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Administrateur } from 'src/app/Administrateur';




@Component({
  selector: 'app-affiche-prof',
  templateUrl: './affiche-prof.component.html',
  styleUrls: ['./affiche-prof.component.css']
})
export class AfficheProfComponent {

  profs : any[] | undefined;
  
  data: any | undefined;
  userInfo: any | Administrateur;
  //userInfo : any =this.service.recupDonnees;
  listeProfsDem: any | Document;
  nbrDemEnvProf : any | undefined;
  nbrProfs : any | undefined;
  nbrEtds: any | undefined;
  nbrNouvDem: any | undefined;

  tousProfs : any | Professeur;

  
  url: string = "http://localhost:8000/";

  constructor(private service: AppService, private router: Router) { 
   
  }


  ngOnInit(): void {

    this.service.TousProfs().subscribe(data => {

      console.log(data);
      this.listeProfsDem=data[0];
      this.nbrDemEnvProf =data[1];
      this.nbrProfs=data[2];
      this.nbrEtds=data[3];
      this.tousProfs=data[4];
      this.nbrNouvDem=data[5];
      this.userInfo=data[6];
      console.log(this.userInfo);
 
     
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
/*
 

  //Sidebar toggle show hide function
  

  
  modifierProf(id: number){
    this.router.navigate(['update', id]);
  }
*/
 




}
