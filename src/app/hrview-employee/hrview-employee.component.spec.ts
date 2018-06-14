import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HRViewEmployeeComponent } from './hrview-employee.component';

describe('HRViewEmployeeComponent', () => {
  let component: HRViewEmployeeComponent;
  let fixture: ComponentFixture<HRViewEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HRViewEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRViewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
