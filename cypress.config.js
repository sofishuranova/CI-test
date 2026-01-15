const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://go2che.in.ua',
    excludeSpecPattern: ['cypress/e2e/_archive/**/*'],
  },
})
