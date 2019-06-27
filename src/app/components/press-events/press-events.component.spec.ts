import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressEventsComponent } from './press-events.component';

describe('PressEventsComponent', () => {
  let component: PressEventsComponent;
  let fixture: ComponentFixture<PressEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
