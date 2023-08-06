import { TestBed } from '@angular/core/testing';

import { ManagementUserService } from './management-user.service';

describe('ManagementUserService', () => {
  let service: ManagementUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
