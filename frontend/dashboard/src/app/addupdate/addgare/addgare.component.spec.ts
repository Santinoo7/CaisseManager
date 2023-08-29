import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgareComponent } from './addgare.component';

describe('AddgareComponent', () => {
  let component: AddgareComponent;
  let fixture: ComponentFixture<AddgareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddgareComponent]
    });
    fixture = TestBed.createComponent(AddgareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
