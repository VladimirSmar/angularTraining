import { TestBed } from '@angular/core/testing';

import { ServerTableService } from './server-table.service';

describe('ServerTableService', () => {
  let service: ServerTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
