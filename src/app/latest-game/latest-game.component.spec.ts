import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestGameComponent } from './latest-game.component';

describe('LatestGameComponent', () => {
  let component: LatestGameComponent;
  let fixture: ComponentFixture<LatestGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestGameComponent]
    });
    fixture = TestBed.createComponent(LatestGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
