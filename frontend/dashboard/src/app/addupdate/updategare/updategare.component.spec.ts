import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategareComponent } from './updategare.component';

describe('UpdategareComponent', () => {
  let component: UpdategareComponent;
  let fixture: ComponentFixture<UpdategareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdategareComponent]
    });
    fixture = TestBed.createComponent(UpdategareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
