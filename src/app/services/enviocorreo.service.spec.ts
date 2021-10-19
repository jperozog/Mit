import { TestBed } from '@angular/core/testing';

import { EnviocorreoService } from './enviocorreo.service';

describe('EnviocorreoService', () => {
  let service: EnviocorreoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviocorreoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
