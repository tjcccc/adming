import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionTableShowcaseComponent } from './collection-table-showcase.component';

describe('CollectionTableShowcaseComponent', () => {
  let component: CollectionTableShowcaseComponent;
  let fixture: ComponentFixture<CollectionTableShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionTableShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionTableShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
