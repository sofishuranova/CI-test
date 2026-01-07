describe('Main page', () => {
  it('Main page opens successfully', () => {
    cy.visit('/')
    cy.url().should('include', 'go2che.in.ua')
  })
})