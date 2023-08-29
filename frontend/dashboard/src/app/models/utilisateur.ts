export class Utilisateurs{
    id: number;
    name: string ;
    email: string;
    role: string;
    login: string;
    password: string;
    constructor(id:any,name:any,email:any,
        role:any,login: any,password:any){
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.login = login;
        this.password = password;
    }
  }
  