import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcaissierComponent } from './addcaissier.component';

describe('AddcaissierComponent', () => {
  let component: AddcaissierComponent;
  let fixture: ComponentFixture<AddcaissierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcaissierComponent]
    });
    fixture = TestBed.createComponent(AddcaissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
