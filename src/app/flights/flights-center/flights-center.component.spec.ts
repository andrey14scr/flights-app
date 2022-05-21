import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsCenterComponent } from './flights-center.component';

describe('FlightsCenterComponent', () => {
  let component: FlightsCenterComponent;
  let fixture: ComponentFixture<FlightsCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
