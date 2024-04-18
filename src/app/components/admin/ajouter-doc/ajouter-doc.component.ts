import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-ajouter-doc',
  templateUrl: './ajouter-doc.component.html',
  styleUrls: ['./ajouter-doc.component.css']
})
export class AjouterDocComponent implements OnInit {



  constructor(private service: AppService, private router: Router) { }
  data: any

  
  form = new FormGroup({
    libelle_doc:new FormControl('', [Validators.required]),
    description_doc: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required]),
   
  })

  ngOnInit(): void {
  }

  
  ajouterDoc(){
    this.data = this.form.value
    console.log(this.data)

    this.service.ajouterDoc(this.data).subscribe(data => {
      console.log(data)
    })

    
    window.alert("Document ajouté !");
    this.router.navigate(['adminDashboard/10000000']);
  }

}








 