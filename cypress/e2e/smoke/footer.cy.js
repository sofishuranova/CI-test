describe('Smoke footer Go2Che', () => {
it('footer menu is navigate user on desktop', () => {
    cy.viewport(1280, 800)
    cy.visit('/')
  // Navigate to Share your impressions page via header
    cy.get('.footer-menu')
        .find('a[href*="/share-impressions"]') 
        .should('be.visible')
        .click()
    cy.url().should('include', '/share-impressions')
    
  // Navigate to Add #locals page via header
    cy.get('.footer-menu')
        .find('a[href*="/add-place"]') 
        .should('be.visible')
        .click()
    cy.url().should('include', '/add-place')
  })
})