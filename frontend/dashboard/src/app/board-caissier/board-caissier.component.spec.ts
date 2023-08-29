import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCaissierComponent } from './board-caissier.component';

describe('BoardCaissierComponent', () => {
  let component: BoardCaissierComponent;
  let fixture: ComponentFixture<BoardCaissierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardCaissierComponent]
    });
    fixture = TestBed.createComponent(BoardCaissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
