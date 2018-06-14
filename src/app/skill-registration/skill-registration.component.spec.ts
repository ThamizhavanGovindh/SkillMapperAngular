import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRegistrationComponent } from './skill-registration.component';

describe('SkillRegistrationComponent', () => {
  let component: SkillRegistrationComponent;
  let fixture: ComponentFixture<SkillRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
