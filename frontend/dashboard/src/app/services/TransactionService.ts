import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment';
import { Transactions } from '../models/transaction';

@Injectable({
    providedIn: 'root'
})
export class TransactionService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    private sharedData: any;

        setData(data: any) {
            this.sharedData = data;
        }

        getData() {
            return this.sharedData;
        }

    
    
    public getTransactions(): Observable<Transactions[]>{
        return this.http.get<Transactions[]>(`${this.apiServerUrl}/Transactions/all`, {withCredentials:true});
    }
    public addTransactions(Transactions ?: Transactions): Observable<Transactions>{
        return this.http.post<Transactions>(`${this.apiServerUrl}/Transactions/add`, Transactions,{withCredentials:true});
    }

    public updateTransactions(Transactions : Transactions): Observable<Transactions>{
        return this.http.put<Transactions>(`${this.apiServerUrl}/Transactions/update`, Transactions);
    }

    public deleteTransactions(TransactionsId : number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/Transactions/delete/${TransactionsId }`);
    }
    create(data: any): Observable<any> {
        return this.http.post(this.apiServerUrl, data);
      }
    
}