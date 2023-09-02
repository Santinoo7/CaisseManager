import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const USER_KEY ='auth-user';
const httpOptions={
  headers: new HttpHeaders ({ 'Content-Type': 'application/json', 'Accept':'application/json'
}),
withCredentials: true,

};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
login(username : string, password: string): Observable<any> {
return this.http.post(
  AUTH_API +'signin',
  {
   username,
   password, 
  },
  httpOptions
);
}
register(username:string , email : string, password: string):Observable<any>{
  return this.http.post(
    AUTH_API +'signup',
    {
      username,
      email,
      password,
    },
    httpOptions
  );
}
logout():Observable<any> {
  return this.http.post(AUTH_API + 'signout', {}, httpOptions);
}
public isLoggedIn(): boolean {
  const user = window.sessionStorage.getItem(USER_KEY);
  if (user){
    return true;
  }
  return false ;
}

public isUserAdmin(): boolean {
  const userString = window.sessionStorage.getItem(USER_KEY);
  if(userString){
  const user = JSON.parse(userString);
  if (user.roles.includes("ROLE_ADMIN")){
    return true;
  }
}
return false;
}

}
