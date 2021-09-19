import { TestBed } from '@angular/core/testing';

import { MetApiService } from './met-api.service';

describe('MetApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetApiService = TestBed.get(MetApiService);
    expect(service).toBeTruthy();
  });
});
