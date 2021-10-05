import { Injectable } from '@angular/core';
import { result } from 'cypress/types/lodash';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calculate(arg: any): any {
    const result = arg.op1 + arg.op2;
    return {result: result};
  }
}
