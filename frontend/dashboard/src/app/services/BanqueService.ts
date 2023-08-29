import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment';
import { Banques } from '../models/banque';

@Injectable({
    providedIn: 'root'
})
export class BanqueService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    private sharedData: any;

        setData(data: any) {
            this.sharedData = data;
        }

        getData() {
            return this.sharedData;
        }

    
    
    public getBanques(): Observable<Banques[]>{
        return this.http.get<Banques[]>(`${this.apiServerUrl}/Banques/all`);
    }
    public addBanques(Banques ?: Banques): Observable<Banques>{
        return this.http.post<Banques>(`${this.apiServerUrl}/Banques/add`, Banques);
    }

    public updateBanques(Banques : Banques): Observable<Banques>{
        return this.http.put<Banques>(`${this.apiServerUrl}/Banques/update`, Banques);
    }

    public deleteBanques(BanquesId : number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/Banques/delete/${BanquesId }`);
    }
    create(data: any): Observable<any> {
        return this.http.post(this.apiServerUrl, data);
      }
    
}