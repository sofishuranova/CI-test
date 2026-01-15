describe('Smoke header Go2Che', () => {
it('header menu is navigate user on desktop', () => {
    cy.viewport(1280, 800)
    cy.visit('/')
  // Navigate to Worth seeing page via header
    cy.get('.menu-header-ua-container')
        .find('a[href*="/worth-seeing"]') 
        .should('be.visible')
        .click()
    cy.url().should('include', '/worth-seeing/')

  // Navigate to Contacts page via header
    cy.get('.menu-header-ua-container')
        .find('a[href*="/contacts"]')
        .should('be.visible')
        .click()
    cy.url().should('include', '/contacts')
  })
})