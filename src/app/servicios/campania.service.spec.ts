import { TestBed } from '@angular/core/testing';

import { CampaniaService } from './campania.service';

describe('CampaniaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampaniaService = TestBed.get(CampaniaService);
    expect(service).toBeTruthy();
  });
});
