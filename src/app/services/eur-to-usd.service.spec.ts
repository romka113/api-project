import { TestBed } from '@angular/core/testing';

import { EurToUsdService } from './eur-to-usd.service';

describe('EurToUsdService', () => {
  let service: EurToUsdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EurToUsdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
