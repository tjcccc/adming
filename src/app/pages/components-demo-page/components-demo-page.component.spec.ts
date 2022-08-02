import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDemoPageComponent } from './components-demo-page.component';

describe('ComponentsDemoPageComponent', () => {
  let component: ComponentsDemoPageComponent;
  let fixture: ComponentFixture<ComponentsDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsDemoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
