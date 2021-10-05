import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate a sum', () => {
    const result = service.calculate({op1: 1, op2: 2, operation: 'sum'});
    expect(result).toEqual({result: 3});
  })

  it('should calculate a multiplication', () => {
    const result = service.calculate({op1: 3, op2: 6, operation: 'multiply'});
    expect(result).toEqual({result: 18});
  })
});
