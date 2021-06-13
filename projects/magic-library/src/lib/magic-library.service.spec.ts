import { TestBed } from '@angular/core/testing';

import { MagicLibraryService } from './magic-library.service';

describe('MagicLibraryService', () => {
  let service: MagicLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
