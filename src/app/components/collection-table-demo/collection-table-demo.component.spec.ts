import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionTableDemoComponent } from './collection-table-demo.component';

describe('CollectionTableDemoComponent', () => {
  let component: CollectionTableDemoComponent;
  let fixture: ComponentFixture<CollectionTableDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionTableDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
