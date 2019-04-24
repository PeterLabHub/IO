import { TestBed } from '@angular/core/testing';
import { StorageServic } from './storage.service';


describe('StorageServic', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageServic = TestBed.get(StorageServic);
    expect(service).toBeTruthy();
  });
});
