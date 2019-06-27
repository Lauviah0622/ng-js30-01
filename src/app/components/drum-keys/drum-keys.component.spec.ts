import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumKeysComponent } from './drum-keys.component';

describe('DrumKeysComponent', () => {
  let component: DrumKeysComponent;
  let fixture: ComponentFixture<DrumKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
