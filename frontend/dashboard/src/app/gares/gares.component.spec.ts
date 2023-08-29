import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaresComponent } from './gares.component';

describe('GaresComponent', () => {
  let component: GaresComponent;
  let fixture: ComponentFixture<GaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaresComponent]
    });
    fixture = TestBed.createComponent(GaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
