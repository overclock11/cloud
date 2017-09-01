import { TestBed, inject } from '@angular/core/testing';

import { ConcursosService } from './concursos.service';

describe('ConcursosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConcursosService]
    });
  });

  it('should be created', inject([ConcursosService], (service: ConcursosService) => {
    expect(service).toBeTruthy();
  }));
});
