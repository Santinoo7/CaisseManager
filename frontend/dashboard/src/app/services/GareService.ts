import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment';
import { Gares } from '../models/gare';

@Injectable({
    providedIn: 'root'
})
export class GareService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    private sharedData: any;

        setData(data: any) {
            this.sharedData = data;
        }

        getData() {
            return this.sharedData;
        }

    
    
    public getGares(): Observable<Gares[]>{
        return this.http.get<Gares[]>(`${this.apiServerUrl}/Gares/all`, {withCredentials:true});
    }
    public addGares(Gares ?: Gares): Observable<Gares>{
        return this.http.post<Gares>(`${this.apiServerUrl}/Gares/add`, Gares,{withCredentials:true});
    }

    public updateGares(Gares : Gares): Observable<Gares>{
        return this.http.put<Gares>(`${this.apiServerUrl}/Gares/update`, Gares);
    }

    public deleteGares(GaresId : number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/Gares/delete/${GaresId }`);
    }
    create(data: any): Observable<any> {
        return this.http.post(this.apiServerUrl, data);
      }
    
}