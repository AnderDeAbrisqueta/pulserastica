import { TestBed, inject } from '@angular/core/testing';

import { InfoPaginasService } from './info-paginas.service';

describe('InfoPaginasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoPaginasService]
    });
  });

  it('should be created', inject([InfoPaginasService], (service: InfoPaginasService) => {
    expect(service).toBeTruthy();
  }));
});
