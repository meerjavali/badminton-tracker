import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonPlayerComponent } from './badminton-player.component';

describe('BadmintonPlayerComponent', () => {
  let component: BadmintonPlayerComponent;
  let fixture: ComponentFixture<BadmintonPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadmintonPlayerComponent]
    });
    fixture = TestBed.createComponent(BadmintonPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
