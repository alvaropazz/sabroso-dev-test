import { TestBed } from '@angular/core/testing';

import { ProductFetchService } from './product-fetch.service';

describe('ProductFetchService', () => {
  let service: ProductFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
