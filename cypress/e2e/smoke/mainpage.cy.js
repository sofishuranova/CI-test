describe('Main page - smoke tests', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false)
  })

  it('main page loads correctly and Join us button works', () => {
    cy.request('/').its('status').should('eq', 200)

    cy.visit('/')
    cy.url().should('include', 'go2che.in.ua')

    cy.get('.images-section__link.btn-main')
      .as('hero-btn')

    cy.get('@hero-btn')
      .should('be.visible')
      .and('have.attr', 'href')

    cy.get('@hero-btn')
      .invoke('attr', 'href')
      .should('include', '/become-partner')
  })
})