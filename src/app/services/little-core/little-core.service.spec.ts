import { TestBed } from '@angular/core/testing';

import { LittleCoreService } from './little-core.service';

describe('LittleCoreService', () => {
  let service: LittleCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LittleCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
