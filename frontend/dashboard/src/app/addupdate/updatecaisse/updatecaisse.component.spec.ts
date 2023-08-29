import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecaisseComponent } from './updatecaisse.component';

describe('UpdatecaisseComponent', () => {
  let component: UpdatecaisseComponent;
  let fixture: ComponentFixture<UpdatecaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecaisseComponent]
    });
    fixture = TestBed.createComponent(UpdatecaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
