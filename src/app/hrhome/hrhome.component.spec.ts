import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HRHomeComponent } from './hrhome.component';

describe('HRHomeComponent', () => {
  let component: HRHomeComponent;
  let fixture: ComponentFixture<HRHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HRHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
