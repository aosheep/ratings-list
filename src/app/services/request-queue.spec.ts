import { TestBed } from '@angular/core/testing';

import { RequestQueue } from './request-queue';

describe('RequestQueue', () => {
  let service: RequestQueue;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestQueue);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
