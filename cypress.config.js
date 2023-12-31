const { defineConfig } = require("cypress");
const cypressSplit = require('cypress-split')


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      cypressSplit(on, config)
      return config 
      // implement node event listeners here
    },
    baseUrl: 'https://app-qa.remotesf.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },

});
