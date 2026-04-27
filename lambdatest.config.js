const { defineConfig } = require('@playwright/test');

const capabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 10',
    build: 'Amazon Automation Build',
    name: 'TC1 and TC2 Parallel',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    network: true,
    console: true,
  },
};

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  timeout: 120000,
  use: {
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
    },
  },
});