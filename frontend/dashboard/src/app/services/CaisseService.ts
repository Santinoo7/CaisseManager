import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment';
import { Caisses } from '../models/caisse';

@Injectable({
    providedIn: 'root'
})
export class CaisseService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    private sharedData: any;

        setData(data: any) {
            this.sharedData = data;
        }

        getData() {
            return this.sharedData;
        }

    
    
    public getCaisses(): Observable<Caisses[]>{
        return this.http.get<Caisses[]>(`${this.apiServerUrl}/Caisses/all`);
    }
    public addCaisses(Caisses ?: Caisses): Observable<Caisses>{
        return this.http.post<Caisses>(`${this.apiServerUrl}/Caisses/add`, Caisses);
    }

    public updateCaisses(Caisses : Caisses): Observable<Caisses>{
        return this.http.put<Caisses>(`${this.apiServerUrl}/Caisses/update`, Caisses);
    }

    public deleteCaisses(CaissesId : number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/Caisses/delete/${CaissesId }`);
    }
    create(data: any): Observable<any> {
        return this.http.post(this.apiServerUrl, data);
      }
    
}