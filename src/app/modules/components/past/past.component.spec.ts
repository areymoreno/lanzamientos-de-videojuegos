import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastComponent } from './past.component';

describe('PastComponent', () => {
  let component: PastComponent;
  let fixture: ComponentFixture<PastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastComponent]
    });
    fixture = TestBed.createComponent(PastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
