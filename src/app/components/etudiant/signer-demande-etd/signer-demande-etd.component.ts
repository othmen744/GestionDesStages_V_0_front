
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/Etudiant';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-signer-demande-etd',
  templateUrl: './signer-demande-etd.component.html',
  styleUrls: ['./signer-demande-etd.component.css']
})
export class SignerDemandeEtdComponent {

  

  data: any | undefined;

  userInfo : any =this.service.recupDonnees;
  doc : any | Document;
  etd : any | Etudiant;
  nbrnouvDemandes : any | undefined;


  
  
  constructor(private service: AppService, private router: Router) { 
   
  }


  
    form = new FormGroup({
      libelle_doc:new FormControl('', [Validators.required]),
      description_doc: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
  
  })

  

  ngOnInit(): void {
  }


    ajouterDem(){
      this.data = this.form.value
      console.log(this.data)
  
      this.service.ajouterDem(this.data).subscribe(data => {
        console.log(data)
      })
  
      
      window.alert("Votre Demande a été envoyée !");
      this.router.navigate(['etdDashboard']);
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



