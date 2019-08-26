import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingComponent } from './adming.component';

describe('AdmingComponent', () => {
  let component: AdmingComponent;
  let fixture: ComponentFixture<AdmingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
