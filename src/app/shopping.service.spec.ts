import { TestBed } from '@angular/core/testing';

import { ShoppingService } from './shopping.service';

describe('ShoppingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingService = TestBed.get(ShoppingService);
    expect(service).toBeTruthy();
  });
});
