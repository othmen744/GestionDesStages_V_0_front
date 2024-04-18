import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-modifier-etd',
  templateUrl: './modifier-etd.component.html',
  styleUrls: ['./modifier-etd.component.css']
})
export class ModifierEtdComponent implements OnInit {

  

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

  
  modifierEtd(){
    this.data = this.form.value
    console.log(this.data)

    this.service.modifierAdmin(this.data).subscribe(data => {
      console.log(data)
    })

    
    window.alert("Informations Modifiées !");
    this.router.navigate(['etdDashboard']);
  }


}














 