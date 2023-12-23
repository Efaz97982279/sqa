const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    reporter: 'cypress-mochawesome-reporter',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalStudio: true,
  },
});
