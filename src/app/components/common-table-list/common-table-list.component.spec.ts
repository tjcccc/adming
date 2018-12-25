import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTableListComponent } from './common-table-list.component';

describe('CommonTableListComponent', () => {
  let component: CommonTableListComponent;
  let fixture: ComponentFixture<CommonTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
