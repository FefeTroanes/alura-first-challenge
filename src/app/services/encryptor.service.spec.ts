import { TestBed } from '@angular/core/testing';

import { EncryptorService } from './encryptor.service';

describe('EncryptorService', () => {
  let service: EncryptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncryptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
