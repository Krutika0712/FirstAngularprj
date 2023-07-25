import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcuatorComponent } from './calcuator.component';

describe('CalcuatorComponent', () => {
  let component: CalcuatorComponent;
  let fixture: ComponentFixture<CalcuatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcuatorComponent]
    });
    fixture = TestBed.createComponent(CalcuatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
