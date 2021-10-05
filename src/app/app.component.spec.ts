import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calculator-tdd'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calculator-tdd');
  });

  xit('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('calculator-tdd app is running!');
  });

  it('should calculate a sum', () => {
    // this is a spy object with a 'calculate' method
    component.calculatorService = jasmine.createSpyObj(['calculate']);
    // function calculate() { return {result: '14'} }
    component.calculatorService.calculate.and.returnValue({result: '14'});
    
    const html = fixture.nativeElement;
    const key1 = html.querySelector('[data-cy="digit1"]');
    key1.click();
    html.querySelector('[data-cy="digit2"]').click();
    html.querySelector('[data-cy="sum"]').click();
    html.querySelector('[data-cy="digit2"]').click();
    html.querySelector('[data-cy="enter"]').click();
    fixture.detectChanges();
    const mainDisplay = html.querySelector('[data-cy="mainDisplay"]');
    expect(mainDisplay.textContent.trim()).toEqual('14');

    // assert the expected interaction between AppComponent and CalculatorService
    const calls = component.calculatorService.calculate.calls;
    // calculate has been called just once
    expect(calls.count()).toEqual(1);
    // calculate({op1: '12', op2: '2', operation: 'sum'});
    expect(calls.argsFor(0)[0]).toEqual({op1: 12, op2: 2, operation: 'sum'});
  })
});
