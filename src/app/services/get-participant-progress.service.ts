/**
 * Provides information about a participants personal and team fundraising progress.
 */
import { Injectable } from '@angular/core';

interface GetParticipantProgressResponse {
  getParticipantProgressResponse: object;
}

@Injectable({
  providedIn: 'root'
})
export class GetParticipantProgressService {
  constructor() {}

  getParticipantProgress(): GetParticipantProgressResponse {
    return {
      getParticipantProgressResponse: {
        teamProgress: { percent: '50', raised: '12500', goal: '25000' },
        personalProgress: { percent: '56', raised: '5600', giftAidMatch: '2000', goal: '10000' },
        daysLeft: '7',
        companyProgress: { percent: '25', raised: '12500', goal: '50000' }
      }
    };
  }
}
