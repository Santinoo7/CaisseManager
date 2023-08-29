import { Component } from '@angular/core';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';

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

  constructor(private storageService: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn){
      const user = this.storageService.getUser();
      this.roles =this.roles;

      this.showAdminBoard = this.roles.includes ('ROLE_ADMIN');
      this.username =user.username;
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
