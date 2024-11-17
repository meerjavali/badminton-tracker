import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonFormComponent } from './badminton-form.component';

describe('BadmintonFormComponent', () => {
  let component: BadmintonFormComponent;
  let fixture: ComponentFixture<BadmintonFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadmintonFormComponent]
    });
    fixture = TestBed.createComponent(BadmintonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
