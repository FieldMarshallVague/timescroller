import { TestBed, inject } from '@angular/core/testing';

import { PlumbService } from './plumb.service';

describe('PlumbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlumbService]
    });
  });

  it('should be created', inject([PlumbService], (service: PlumbService) => {
    expect(service).toBeTruthy();
  }));
});
