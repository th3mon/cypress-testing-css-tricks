describe('CSS-Tricks home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('contains "CSS-Tricks" in the title', () => {
    cy.title().should('contain', 'CSS-Tricks');
  });

  it('has a visible star logo', () => {
    cy.get('.icon-logo-star').should('be.visible');
  });

  describe('with a 320x568 viewport', () => {
    beforeEach(() => {
      cy.viewport(320, 568);
    });

    it('has visible mobile menu toggle', () => {
      cy.get('#mobile-menu-toggle').should('be.visible');
    });
  });

  describe('with a 1085x660 viewport', () => {
    beforeEach(() => {
      cy.viewport(1085, 660);
    });

    it('has visible mobile menu toggle', () => {
      cy.get('#mobile-menu-toggle').should('be.visible');
    });
  });

  describe('site search', () => {
    beforeEach(() => {
      cy.get('.search-field').type('flexbox{enter}');
    });

    it('requests the results', () => {
      cy.url().should('include', '?s=flexbox');
    });

    describe('Search results page', () => {
      beforeEach(() => {
        cy.visit('/?s=flexbox');
      });

      it('displays search results', () => {
        cy.get('.search-grid-list li').should('exist');
      });
    });
  });
});
