import { TestBed } from '@angular/core/testing';

import { MyGalleryApiService } from './my-gallery-api.service';

describe('MyGalleryApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyGalleryApiService = TestBed.get(MyGalleryApiService);
    expect(service).toBeTruthy();
  });
});
