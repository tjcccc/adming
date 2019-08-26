import { TestBed } from '@angular/core/testing';

import { AdmingService } from './adming.service';

describe('AdmingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmingService = TestBed.get(AdmingService);
    expect(service).toBeTruthy();
  });
});
