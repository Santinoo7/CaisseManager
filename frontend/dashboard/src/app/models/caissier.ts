import { Transactions } from "./transaction";

export class Caissier{
    id: number;
    description: string ;
    date: Date;
    montant: string;
    transaction: Transactions
    constructor(id:any,description:any,date:any,transaction:any,montant:any){
        this.id = id;
        this.description = description;
        this.date = date;
        this.montant = montant;
        this.transaction = transaction;
}
}