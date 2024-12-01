import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePeerComponent } from './profile-peer.component';

describe('ProfilePeerComponent', () => {
  let component: ProfilePeerComponent;
  let fixture: ComponentFixture<ProfilePeerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePeerComponent]
    });
    fixture = TestBed.createComponent(ProfilePeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
