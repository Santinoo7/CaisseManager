import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})


export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private readonly storageService: StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    
  }

}