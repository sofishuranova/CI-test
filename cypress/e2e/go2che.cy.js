describe('Main page', () => {
  it('Main page opens successfully', () => {
    cy.visit('/')
    cy.url().should('include', 'go2che.in.ua')
  })
  
  it('Displays slider on the Hero section', () => {
    cy.visit('/')
    cy.get('.images-section__slider', { timeout: 10000 }).should('be.visible')
  })

  it('Displays title on the Hero section', () => {
    cy.visit('/')
    cy.get('.images-section__content_title', { timeout: 10000 }).should('be.visible')
  })

  it('CTA button is visible on the Hero section', () => {
    cy.visit('/')
    cy.contains('Приєднайся', { timeout: 10000 }).as('cta').should('be.visible')

    // Check button has non-empty text
    cy.get('@cta').invoke('text').should('not.be.empty')

    // Check button contains an icon element (svg, <i>, or common icon classes)
    cy.get('@cta').find('.icon-arrow-right').should('exist')
  })

  it('CTA link points to Become Partner page and opens in the same tab', () => {
  cy.visit('/')
  cy.contains('Приєднайся', { timeout: 10000 })
    .first()
    .should('have.attr', 'href', 'https://go2che.in.ua/become-partner/')
    .and('have.attr', 'target', '_self')
  })
})
