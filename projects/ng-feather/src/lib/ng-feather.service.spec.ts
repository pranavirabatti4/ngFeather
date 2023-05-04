import { TestBed } from '@angular/core/testing';

import { NgFeatherService } from './ng-feather.service';

describe('NgFeatherService', () => {
  let service: NgFeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
