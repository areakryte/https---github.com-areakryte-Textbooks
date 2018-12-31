import { TestBed } from '@angular/core/testing';

import { DbloadService } from './dbload.service';

describe('DbloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbloadService = TestBed.get(DbloadService);
    expect(service).toBeTruthy();
  });
});
