Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('style')) {
    return false
  }
  
  if (err.message.includes('Map element not found')) {
    return false
  }
})