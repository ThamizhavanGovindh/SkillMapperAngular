import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRgstrComponent } from './skill-rgstr.component';

describe('SkillRgstrComponent', () => {
  let component: SkillRgstrComponent;
  let fixture: ComponentFixture<SkillRgstrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillRgstrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillRgstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
