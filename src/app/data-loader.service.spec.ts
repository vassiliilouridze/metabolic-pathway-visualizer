import { TestBed, inject } from '@angular/core/testing';

import { DataLoader} from './data-loader.service';

describe('DataLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataLoader]
    });
  });

  it('should ...', inject([DataLoader], (service: DataLoader) => {
    expect(service).toBeTruthy();
  }));
});
