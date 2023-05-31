describe('basic e2e tests for lets-learn-our-pokemon', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display a loading message', () => {
    cy.get('#loading').should('have.text', 'Loading Pokemon data...');
  });

  it('should show a list of pokemon', () => {
    cy.get('a', { timeout: 60000 }).should('have.length.above', 900);
  });

  it('should allow you to search by pokemon name', () => {
    cy.get('a', { timeout: 60000 }).should('have.length.above', 900);
    cy.get('input').type('eevee');
    cy.get('a').should('have.length', 1);
  });

  it('should show pokemon details when one in the list is clicked', () => {
    cy.get('a')
      .first()
      .click();

    cy.get('h2 span').should('have.text', 'Bulbasaur');
  });

  // need to figure how to validate this
  // it('should text to speech the pokemon name', () => {});

  it('should allow you to navigate back to the list', () => {
    cy.get('a')
      .first()
      .click();

    cy.get('h2 span').should('have.text', 'Bulbasaur');

    cy.get('button').first().click();

    cy.get('a').should('have.length.above', 900);
  });
});