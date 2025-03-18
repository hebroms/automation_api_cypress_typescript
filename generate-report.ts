import { reporter } from 'multiple-cucumber-html-reporter';

reporter.generate({
  jsonDir: 'cypress/cucumber-json',
  reportPath: './reports/cucumber-html',
  metadata:{
      browser: {
          name: 'chrome',
          version: '114'
      },
      device: 'Local test machine',
      platform: {
          name: 'windows',
          version: '10'
      }
  },
});
