import { TestBed } from '@angular/core/testing';

import { FormItemControlService } from './form-item-control.service';

describe('FormItemControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormItemControlService = TestBed.get(FormItemControlService);
    expect(service).toBeTruthy();
  });
});
