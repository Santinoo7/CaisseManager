import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment';
import { Caissier } from '../models/caissier';

@Injectable({
    providedIn: 'root'
})
export class CaissierService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    private sharedData: any;

        setData(data: any) {
            this.sharedData = data;
        }

        getData() {
            return this.sharedData;
        }

    
    
    public getCaissier(): Observable<Caissier[]>{
        return this.http.get<Caissier[]>(`${this.apiServerUrl}/Caissier/all`, {withCredentials:true});
    }
    public addCaissier(Caissier ?: Caissier): Observable<Caissier>{
        return this.http.post<Caissier>(`${this.apiServerUrl}/Caissier/add`, Caissier);
    }

    public updateCaissier(Caissier : Caissier): Observable<Caissier>{
        return this.http.put<Caissier>(`${this.apiServerUrl}/Caissier/update`, Caissier);
    }

    public deleteCaissier(CaissierId : number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/Caissier/delete/${CaissierId }`);
    }
    create(data: any): Observable<any> {
        return this.http.post(this.apiServerUrl, data);
      }
    
}