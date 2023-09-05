import { Component, OnInit } from '@angular/core';
import {
  faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
  faUser,
  faCashRegister,
  faBuildingColumns,
  faTrain,
  faBookOpen,
  faFolder,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { StorageService } from '../_services/storage.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  
})
export class SideNavComponent implements OnInit {

  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
  faUser=  faUser;
  faCashRegister=faCashRegister;
  faBuildingColumns= faBuildingColumns;
  faTrain=faTrain;
  faBookOpen= faBookOpen;
  faFolder=faFolder;
  faGear =faGear;
  isAdmin = false;
  isLoggedIn = false;

  

  constructor(private storageService:StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn){
      this.isAdmin = this.storageService.isUserAdmin();
    }
  }

}