import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionTablesPageComponent } from './collection-tables-page.component';

describe('CollectionTablesPageComponent', () => {
  let component: CollectionTablesPageComponent;
  let fixture: ComponentFixture<CollectionTablesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionTablesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionTablesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
