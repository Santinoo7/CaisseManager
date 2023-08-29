import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecaissierComponent } from './updatecaissier.component';

describe('UpdatecaissierComponent', () => {
  let component: UpdatecaissierComponent;
  let fixture: ComponentFixture<UpdatecaissierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecaissierComponent]
    });
    fixture = TestBed.createComponent(UpdatecaissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
