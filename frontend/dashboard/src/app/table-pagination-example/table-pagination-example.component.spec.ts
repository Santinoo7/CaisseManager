import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationExample } from './table-pagination-example.component';

describe('TablePaginationExampleComponent', () => {
  let component: TablePaginationExample;
  let fixture: ComponentFixture<TablePaginationExample>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePaginationExample]
    });
    fixture = TestBed.createComponent(TablePaginationExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
