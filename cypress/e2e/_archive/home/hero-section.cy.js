describe('Smoke footer Go2Che', () => {
it('displays slider on the Hero section', () => {
    cy.visit('/')
    cy.get('.images-section__slider').should('be.visible')
  })

  it('Join us button is visible and navigate to Become partner page', () => {
    cy.visit('/')
    cy.get('.images-section__link.btn-main').should('be.visible')
        .first()
        .should('not.have.attr', 'disabled')
        .and('not.be.empty')
  })
})