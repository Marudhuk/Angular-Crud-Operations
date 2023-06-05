import { TestBed } from '@angular/core/testing';

import { NogModelService } from './nog-model.service';

describe('NogModelService', () => {
  let service: NogModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NogModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
