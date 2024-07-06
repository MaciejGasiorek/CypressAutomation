const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: 'https://demo.1crmcloud.com/',
      "viewportWidth": 1280,
      "viewportHeight": 720,
      "defaultCommandTimeout": 20000
    },
  component:{
    specPattern:"./cypress/e2e/*.cy.ts"
  },
})
