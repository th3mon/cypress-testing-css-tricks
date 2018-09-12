describe('CSS-Tricks home page', () => {
  beforeEach(() => {
    cy.visit('https://css-tricks.com/');
  });

  it('contains "CSS-Tricks" in the title', () => {
    cy.title().should('contain', 'CSS-Tricks');
  });

  it('has a visible star logo', () => {
    cy.get('.icon-logo-star').should('be.visible');
  });
});
