import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebanqueComponent } from './updatebanque.component';

describe('UpdatebanqueComponent', () => {
  let component: UpdatebanqueComponent;
  let fixture: ComponentFixture<UpdatebanqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatebanqueComponent]
    });
    fixture = TestBed.createComponent(UpdatebanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
