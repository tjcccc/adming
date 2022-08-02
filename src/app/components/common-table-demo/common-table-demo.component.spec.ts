import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTableDemoComponent } from './common-table-demo.component';

describe('CommonTableDemoComponent', () => {
  let component: CommonTableDemoComponent;
  let fixture: ComponentFixture<CommonTableDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonTableDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
