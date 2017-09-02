import { TestBed, inject } from '@angular/core/testing';

import { CargarVideosService } from './cargar-videos.service';

describe('CargarVideosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargarVideosService]
    });
  });

  it('should be created', inject([CargarVideosService], (service: CargarVideosService) => {
    expect(service).toBeTruthy();
  }));
});
