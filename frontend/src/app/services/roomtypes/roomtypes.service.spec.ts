import { TestBed } from '@angular/core/testing';

import { RoomtypesService } from './roomtypes.service';

describe('RoomtypesService', () => {
  let service: RoomtypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomtypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
