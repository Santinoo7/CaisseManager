import { Component } from '@angular/core';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  
})
export class AppComponent {
  title = 'dashboard';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;

  constructor(private readonly storageService: StorageService, private readonly authService: AuthService, private readonly router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn){
      console.log(this.isLoggedIn);
      const user = this.storageService.getUser();
      this.roles =this.roles;

      this.showAdminBoard = this.roles.includes ('ROLE_ADMIN');
      this.username =user.username;
    } else {
      
      this.router.navigate(['login']);

    }
  }
  logout(): void {
    this.authService.logout().subscribe({
      next:res =>{
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error : err => {
        console.log(err);
      }
    });
  }
}
