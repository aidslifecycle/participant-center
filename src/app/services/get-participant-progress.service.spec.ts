import { TestBed } from '@angular/core/testing';

import { GetParticipantProgressService } from './get-participant-progress.service';

describe('GetParticipantProgressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetParticipantProgressService = TestBed.get(GetParticipantProgressService);
    expect(service).toBeTruthy();
  });
});
