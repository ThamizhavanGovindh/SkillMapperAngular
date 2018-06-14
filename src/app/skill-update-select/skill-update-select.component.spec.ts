import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillUpdateSelectComponent } from './skill-update-select.component';

describe('SkillUpdateSelectComponent', () => {
  let component: SkillUpdateSelectComponent;
  let fixture: ComponentFixture<SkillUpdateSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillUpdateSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillUpdateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
