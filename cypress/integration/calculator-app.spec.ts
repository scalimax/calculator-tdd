/*
  I as a user want to click a sequence of digits on the calculator and get the number displayed on the display
  I as a user want to sum two numbers on the calculator

*/


describe('CalculatorApp', () => {

  it('basic components exist', () => {
    cy.visit('');
    getMainDisplay();
    getDigitKey(1);
  });

  it('should display 0 in the mainDisplay and 1 on the key digit1', () => {
    cy.visit('');
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
    cy.visit('');
    getDigitKey(1).click();
    getMainDisplay().should('have.text', '1');
  })


  it('should append the digit to the mainDisplay whenever a key is clicked', () => {
    cy.visit('');
    getDigitKey(1).click();
    getDigitKey(3).click();
    getDigitKey(6).click();
    getMainDisplay().should('have.text', '136');
  })

  it('should sum two numbers and display the sum in the main display', ()  => {
    cy.visit('');

    getDigitKey(1).click();
    cy.get('[data-cy="sum"]').click();
    getDigitKey(9).click();
    cy.get('[data-cy="enter"]').click();
    getMainDisplay().should('have.text', '10');
  })

  it('should display the whole keyboard', () => {
    cy.visit('');
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
