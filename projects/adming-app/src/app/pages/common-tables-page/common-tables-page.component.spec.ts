import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTablesPageComponent } from './common-tables-page.component';

describe('CommonTablesPageComponent', () => {
  let component: CommonTablesPageComponent;
  let fixture: ComponentFixture<CommonTablesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonTablesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTablesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
