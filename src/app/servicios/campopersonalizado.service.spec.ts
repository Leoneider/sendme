import { TestBed } from '@angular/core/testing';

import { CampopersonalizadoService } from './campopersonalizado.service';

describe('CampopersonalizadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampopersonalizadoService = TestBed.get(CampopersonalizadoService);
    expect(service).toBeTruthy();
  });
});
