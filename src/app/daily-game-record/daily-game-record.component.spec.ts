import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyGameRecordComponent } from './daily-game-record.component';

describe('DailyGameRecordComponent', () => {
  let component: DailyGameRecordComponent;
  let fixture: ComponentFixture<DailyGameRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyGameRecordComponent]
    });
    fixture = TestBed.createComponent(DailyGameRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
