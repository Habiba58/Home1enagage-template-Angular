import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAboutUsComponent } from './learn-about-us.component';

describe('LearnAboutUsComponent', () => {
  let component: LearnAboutUsComponent;
  let fixture: ComponentFixture<LearnAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnAboutUsComponent]
    });
    fixture = TestBed.createComponent(LearnAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
