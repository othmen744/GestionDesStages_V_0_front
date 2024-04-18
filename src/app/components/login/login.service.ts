/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly API_URL = "http://localhost:8000"

  constructor(private httpClient: HttpClient) { }

  logIn():void{

    const userData = {
      email: this.email,
      mdp: this.mdp
        }
 
    this.httpClient.get('http://localhost:8000',userData).subscribe((response)=> {   alert(userData.email+" "+userData.mdp)},
   
    (error)=>{ alert("ERROR")}
    );


this.httpClient.get('http://localhost:8000/')
  }

  }

*/