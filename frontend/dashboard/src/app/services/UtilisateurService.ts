import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment';
import { Utilisateurs } from '../models/utilisateur';

@Injectable({
    providedIn: 'root'
})
export class UtilisateurService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    private sharedData: any;

        setData(data: any) {
            this.sharedData = data;
        }

        getData() {
            return this.sharedData;
        }

    
    
    public getUtilisateurs(): Observable<Utilisateurs[]>{
        return this.http.get<Utilisateurs[]>(`${this.apiServerUrl}/Utilisateurs/all`, {withCredentials:true});
    }
    public addUtilisateurs(Utilisateurs ?: Utilisateurs): Observable<Utilisateurs>{
        return this.http.post<Utilisateurs>(`${this.apiServerUrl}/Utilisateurs/add`, Utilisateurs);
    }

    public updateUtilisateurs(Utilisateurs : Utilisateurs): Observable<Utilisateurs>{
        return this.http.put<Utilisateurs>(`${this.apiServerUrl}/Utilisateurs/update`, Utilisateurs);
    }

    public deleteUtilisateurs(UtilisateursId : number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/Utilisateurs/delete/${UtilisateursId }`);
    }
    create(data: any): Observable<any> {
        return this.http.post(this.apiServerUrl, data);
      }
    
}