import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})


export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private readonly storageService: StorageService,private authService:AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    
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