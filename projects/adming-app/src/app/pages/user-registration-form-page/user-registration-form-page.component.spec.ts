import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationFormPageComponent } from './user-registration-form-page.component';

describe('UserRegistrationFormPageComponent', () => {
  let component: UserRegistrationFormPageComponent;
  let fixture: ComponentFixture<UserRegistrationFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistrationFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
