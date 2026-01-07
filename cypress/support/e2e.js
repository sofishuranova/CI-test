Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('style')) {
    return false
  }
})