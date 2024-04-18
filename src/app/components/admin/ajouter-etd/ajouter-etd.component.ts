import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-ajouter-etd',
  templateUrl: './ajouter-etd.component.html',
  styleUrls: ['./ajouter-etd.component.css']
})
export class AjouterEtdComponent  implements OnInit {
  
  constructor(private service: AppService, private router: Router) { }
  data: any

  
  form = new FormGroup({
    cin_etd:new FormControl('', [Validators.required]),
    nom_etd: new FormControl('', [Validators.required]),
    prenom_etd: new FormControl('', [Validators.required]),
    email_etd: new FormControl('', [Validators.required]),
    tel_etd: new FormControl('', [Validators.required]),
    niveau_etd: new FormControl('', [Validators.required]),
    section_etd: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
  }

  
  ajouterEtd(){
    this.data = this.form.value
    console.log(this.data)

    this.service.ajouterEtd(this.data).subscribe(data => {
      console.log(data)
    })

    
    window.alert("Etudiant Ajouté avec succés !");
    this.router.navigate(['adminDashboard/10000000/afficherEtds']);
  }

}
















 