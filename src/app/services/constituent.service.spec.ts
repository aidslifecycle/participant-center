// tslint:disable-next-line:no-submodule-imports
import { inject, TestBed } from '@angular/core/testing';

import { ConstituentService } from './constituent.service';

describe('ConstituentService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ConstituentService]
		});
	});

	it('should be created', inject([ConstituentService], (service: ConstituentService) => {
		expect(service).toBeTruthy();
	}));
});
