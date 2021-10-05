/*
  I as a user want to click a sequence of digits on the calculator and get the number displayed on the display
  I as a user want to sum two numbers on the calculator

*/

import { visitAll } from "@angular/compiler";
import * as cypress from "cypress";


describe('CalculatorApp', () => {

  beforeEach( () => {
    cy.log("this is executed before each test");
    cy.visit('');
  } )

  afterEach( () => {
    cy.log("this is executed after each test");
  })

  before( () => {
    cy.log("this is executed once before the test suite");

  })

  after( () => {
    cy.log("this is executed once after the test suite");
  })

  it('basic components exist', () => {
    getMainDisplay();
    getDigitKey(1);
  });

  it('should display 0 in the mainDisplay and 1 on the key digit1', () => {
    getMainDisplay().should('have.text', 0);
    getDigitKey(1).should('have.text', '1');
/*
    cy.get('[data-cy="digit1"]')
      .then( ($element) => {
        expect($element, 'text content').to.have.text('1');

        const text = $element.text();
        expect(text).to.equal('1');
      })


    cy.get('[data-cy="digit1"]')
    .invoke('text')
    .should( ($text) => {
      expect($text).to.equal('1');
    })
    */
  })

  it('should append a digit to the display when a key is pressed', () => {
    getDigitKey(1).click();
    getMainDisplay().should('have.text', '1');
  })


  it('should append the digit to the mainDisplay whenever a key is clicked', () => {
    getDigitKey(1).click();
    getDigitKey(3).click();
    getDigitKey(6).click();
    getMainDisplay().should('have.text', '136');
  })

  
  const testData = [
    {first:[1], op: 'sum', second: [9], expected: 10},
    {first:[1, 2], op: 'sum', second: [9, 2], expected: 104}
  ];
  testData.forEach((data) => {
    it(`should ${data.first} ${data.op} ${data.second} be equal to ${data.expected}`, ()  => {
      data.first.forEach( i => getDigitKey(i).click() );
      cy.get(`[data-cy="${data.op}"]`).click();
      data.second.forEach( i => getDigitKey(i).click() );
      cy.get('[data-cy="enter"]').click();
      getMainDisplay().should('have.text', data.expected);
    })
  
  })

  // it('open a new window', () => {
  //   cy.visit('');
  //   cy.get('a').then( ($link) => {
  //     const url = $link.attr('href');
  //     $link.click();
  //     cy.visit(url as string);
  //     cy.contains("0");
  //   });
  // })

  it('should display the whole keyboard', () => {
    cy.get('[data-cy="digit0"]');
    cy.get('[data-cy="digit1"]');
    cy.get('[data-cy="digit2"]');
    cy.get('[data-cy="digit3"]');
    cy.get('[data-cy="digit4"]');
    cy.get('[data-cy="digit5"]');
    cy.get('[data-cy="digit6"]');
    cy.get('[data-cy="digit7"]');
    cy.get('[data-cy="digit8"]');
    cy.get('[data-cy="digit9"]');
    cy.get('[data-cy="sum"]');
    cy.get('[data-cy="subtract"]');
    cy.get('[data-cy="multiply"]');
    cy.get('[data-cy="divide"]');
    cy.get('[data-cy="dot"]');
    cy.get('[data-cy="enter"]');
    cy.get('[data-cy="clear"]');
  })

});

//Page Object Pattern
function getDigitKey(value: number) {
  return cy.get(`[data-cy="digit${value}"]`);
}

function getMainDisplay() {
  return cy.get('[data-cy="mainDisplay"]');
}
