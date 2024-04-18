import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';



@Component({
  selector: 'app-ajouter-prof',
  templateUrl: './ajouter-prof.component.html',
  styleUrls: ['./ajouter-prof.component.css']
})
export class AjouterProfComponent implements OnInit {

  constructor(private service: AppService, private router: Router) { }
  data: any

  
  form = new FormGroup({
    cin_prof:new FormControl('', [Validators.required]),
    nom_prof: new FormControl('', [Validators.required]),
    prenom_prof: new FormControl('', [Validators.required]),
    email_prof: new FormControl('', [Validators.required]),
    tel_prof: new FormControl('', [Validators.required]),
    specialite_prof: new FormControl('', [Validators.required]),
    capacite_prof: new FormControl('', [Validators.required]),
    information_prof: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }

  
  ajouterProf(){
    this.data = this.form.value
    console.log(this.data)

    this.service.ajouterProf(this.data).subscribe(data => {
      console.log(data)
    })

    
    window.alert("Professeur Ajouté avec succés !");

    this.router.navigate(['adminDashboard/10000000/afficherProfs']);
  }

}








 