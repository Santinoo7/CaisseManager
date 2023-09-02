import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./_services/auth.service";


@Injectable({
    providedIn: 'root'
  })
export class RoleGuardService implements CanActivate {
 
    constructor(private router:Router, private authService: AuthService ) {
 
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean|UrlTree {
 
        if (!this.authService.isUserAdmin()) { //Kont 9aleb condition hedhi
            alert('error role');
            
            this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
            return false;
 
            //var urlTree = this.router.createUrlTree(['login']);
            //return urlTree;
        } 
 
        return true;
    }
 
}