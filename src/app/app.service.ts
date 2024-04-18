import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { user } from './user'
import { Professeur } from './Professeur';
import { Etudiant } from './Etudiant';


@Injectable({
  providedIn: 'root'
})


export class AppService {

  private url = "http://localhost:8000/";

  constructor(private http: HttpClient) { }


  // LOGIN

  logIn(user: user){
    return this.http.post<user>(`${this.url}login`, user)

  }

  recupDonnees(user :user) {

    return this.http.post<user>(`${this.url}login`, user)


  }


  dash(){

    return this.http.get<any[]>(this.url+"adminDashboard/10000000")
  }
  
  dashEtd(){

    return this.http.get<any[]>(this.url+"etdDashboard")
  }
  
    // Ajouter Prof
    ajouterProf(prof: Professeur){
      return this.http.post<Professeur>(`${this.url}adminDashboard/10000000/ajouterProf`, prof)
    }
  
    // Get Profs
    TousProfs(): Observable<any[]>{
      return this.http.get<any[]>(this.url+'adminDashboard/10000000/afficherProfs')
    }
    TousStages(): Observable<any[]>{
      return this.http.get<any[]>(this.url+'etdDashboard/afficherStages')
    }

    TousProfsEtds(): Observable<any[]>{
      return this.http.get<any[]>(this.url+'etdDashboard/afficherProfs')
    }

    TousDemandesEnv(): Observable<any[]>{
      return this.http.get<any[]>(this.url+'etdDashboard/afficherDocs')
    }
  /*
    // Get User by Id - Read
    getUserById(id: number): Observable<User>{
      return this.http.get<User>(`${this.url}user/${id}`)
    }

  */

    modifierAdmin(id?: number ,admin?: any): Observable<any>{
      return this.http.put<any>(`${this.url}adminDashboard/10000000/settingAdmin`, admin)
    }

    // Update User - Update
    modifierProf(id?: number ,prof?: any): Observable<any>{
      return this.http.put<any>(`${this.url}/prof/modifierProf/${id}`, prof)
    }
  
    // Delete User - Delete
    supprimerProf(id: number): Observable<any>{
      return this.http.delete<any>(`${this.url}supprimerProf/${id}`)
    }

    
  // Ajouter doc
  ajouterDoc(doc: Document){
    return this.http.post<Document>(`${this.url}adminDashboard/10000000/ajouterDoc`, doc)
  }

  // Get Etds

  TousEtds(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'adminDashboard/10000000/afficherEtds')
  }

  // ajouter Etd
  ajouterEtd(etd: Etudiant){
    return this.http.post<Etudiant>(`${this.url}adminDashboard/10000000/ajouterEtd`, etd)
  }

  
  // Supprimer Etd
  supprimerEtd(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}supprimerEtd/${id}`)
  }


  afficherDemande():Observable<any[]>{
    return this.http.get<any[]>(this.url+'repondreDemande');



  }


  ajouterDem(doc: Document){

    return this.http.post<Document>(`${this.url}signerDemande`, doc)


  }


  dashProf(){

    return this.http.get<any[]>(this.url+"profDashboard")
  }

  TousStagesProf(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'profDashboard/afficherStages')
  }


  afficherDemandeProf():Observable<any[]>{
    return this.http.get<any[]>(this.url+'prof/afficherDem');



  }

  ajouterDemProf(doc: Document){

    return this.http.post<Document>(`${this.url}prof/signerDemande`, doc)


  }
  

}

