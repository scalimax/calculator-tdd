import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calculatorService: any;

  constructor(service: CalculatorService) {
    this.calculatorService = service;
  }

  title = 'calculator-tdd';
  mainDisplayText = '0';

  digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  firstOperand = 0;
  secondOperand = 0;
  operation: string = '';

  pressKey(event: any) {
    if (this.mainDisplayText === '0') this.mainDisplayText = '';
    this.mainDisplayText += event.target.innerText;
  }

  sum(event: any ) {
    this.firstOperand = parseFloat(this.mainDisplayText);
    this.mainDisplayText = '0';
    this.operation = 'sum';
  }

  enter(event: any) {
    this.secondOperand = parseFloat(this.mainDisplayText);
    const result = this.calculatorService.calculate({op1: this.firstOperand, op2: this.secondOperand, operation: this.operation});
    this.mainDisplayText = `${result.result}`;
  }
}
