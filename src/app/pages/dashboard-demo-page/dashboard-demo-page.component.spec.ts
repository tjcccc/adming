import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDemoPageComponent } from './dashboard-demo-page.component';

describe('DashboardDemoPageComponent', () => {
  let component: DashboardDemoPageComponent;
  let fixture: ComponentFixture<DashboardDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDemoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
