import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcaisseComponent } from './addcaisse.component';

describe('AddcaisseComponent', () => {
  let component: AddcaisseComponent;
  let fixture: ComponentFixture<AddcaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcaisseComponent]
    });
    fixture = TestBed.createComponent(AddcaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
