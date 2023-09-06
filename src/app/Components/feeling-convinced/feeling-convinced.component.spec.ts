import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingConvincedComponent } from './feeling-convinced.component';

describe('FeelingConvincedComponent', () => {
  let component: FeelingConvincedComponent;
  let fixture: ComponentFixture<FeelingConvincedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeelingConvincedComponent]
    });
    fixture = TestBed.createComponent(FeelingConvincedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
