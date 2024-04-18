import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { user } from 'src/app/user';
//import { IMAGES } from 'C:/Users/nourm/Documents/workspace-spring-tool-suite-4-4.13.0.RELEASE/PorjGestionStages-Front/Proj-Front/src/assets/images';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {


  constructor(private service: AppService, private router: Router) { }
  response : number | undefined;
  data: any

  
  form = new FormGroup({
    email:new FormControl('', [Validators.required]),
    mdp: new FormControl('', [Validators.required]),
    
  })






  ngOnInit(): void {
  }

  recupDonnees(): user{

    this.data = this.form.value;
    console.log(this.data);

    this.service.logIn(this.data).subscribe( (response) =>{

      return this.data;
    })

    return this.data;

  }

  logIn(): void{

    this.data = this.form.value;
 

    this.service.logIn(this.data).subscribe( (response) =>{

      console.log("hani lena")
      console.log(response);


     if(response == null){
     window.alert("Login ou mot de passe incorrecte");

     setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

      else if(response.type=="A"){
        let nouvRoute='adminDashboard/'+response.id;
        console.log(nouvRoute);
        this.router.navigate([nouvRoute]);


      }

      else if(response.type=="E"){
        let nouvRoute='etdDashboard';
        console.log(nouvRoute);
        this.router.navigate([nouvRoute]);


      }

      else if(response.type=="P"){
        let nouvRoute='profDashboard';
        console.log(nouvRoute);
        this.router.navigate([nouvRoute]);


      }

      


   

      
    })

   
 

  }

  }
  


