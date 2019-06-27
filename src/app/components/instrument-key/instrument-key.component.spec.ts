import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentKeyComponent } from './instrument-key.component';

describe('InstrumentKeyComponent', () => {
  let component: InstrumentKeyComponent;
  let fixture: ComponentFixture<InstrumentKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
