import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingTableComponent } from './adming-table.component';

describe('AdmingTableComponent', () => {
  let component: AdmingTableComponent;
  let fixture: ComponentFixture<AdmingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
