import { TestBed } from '@angular/core/testing';

import { NestSerService } from './nest-ser.service';

describe('NestSerService', () => {
  let service: NestSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
