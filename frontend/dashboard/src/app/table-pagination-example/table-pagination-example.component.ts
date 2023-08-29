import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.component.scss'],
  templateUrl: 'table-pagination-example.component.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class TablePaginationExample implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  constructor(private router: Router){}


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  goToUpdate(){
    this.router.navigate(["gare"]);
  }
  
  deleteGare(){
    alert("deleted button clicked")
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  actions:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 2, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 3, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 4, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 6, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 8, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 9, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 12, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 13, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 17, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 18, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 19, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 22, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 23, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 24, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions:"/id"},
];
