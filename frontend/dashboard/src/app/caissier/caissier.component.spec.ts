import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaissierComponent } from './caissier.component';

describe('CaissierComponent', () => {
  let component: CaissierComponent;
  let fixture: ComponentFixture<CaissierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaissierComponent]
    });
    fixture = TestBed.createComponent(CaissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
