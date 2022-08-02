import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDemoPageComponent } from './tables-demo-page.component';

describe('TablesDemoPageComponent', () => {
  let component: TablesDemoPageComponent;
  let fixture: ComponentFixture<TablesDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesDemoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
