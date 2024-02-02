import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathQuarterComponent } from './deathQuarter.component';

describe('DeathQuarterComponent', () => {
  let component: DeathQuarterComponent;
  let fixture: ComponentFixture<DeathQuarterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeathQuarterComponent]
    });
    fixture = TestBed.createComponent(DeathQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
