import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

// Use process.env.PORT by default and fallback to port 3000
const PORT = process.env.PORT || 3000;

// Set webServer.url and use.baseURL with the location of the WebServer respecting the correct set port
const baseURL = `http://localhost:${PORT}`;

// *.check.spec.ts files use ENVIRONMENT_URL instead of baseURL
process.env.ENVIRONMENT_URL = baseURL;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './__tests__',
  /* Pattern matching for e2e test files */
  testMatch: '*.spec.ts',
  /* Timeout per test */
  timeout: 30 * 1000,
  /* Run tests in files in parallel on CI */
  fullyParallel: !!process.env.CI,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Limit the number of failures on CI to save resources */
  maxFailures: process.env.CI ? 10 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? 'github' : 'list',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /* Run your local dev server before starting the tests */
  /* https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests */
  webServer: {
    command: process.env.CI ? 'npm run start' : 'npm run dev',
    url: baseURL,
    timeout: 2 * 60 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    /**
     * Base URL to use in actions like `await page.goto('/')`.
     * More information: https://playwright.dev/docs/api/class-testoptions#test-options-base-url
     */
    baseURL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    ...(process.env.CI
      ? [
          {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
          },
          {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
          },
        ]
      : []),

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});

/*
 * npx playwright test
   Runs the end-to-end tests.

 * npx playwright test --ui
   Starts the interactive UI mode.

 * npx playwright test --project=chromium
   Runs the tests only on Desktop Chrome.

 * npx playwright test example
   Runs the tests in a specific file.

 * npx playwright test --debug
   Runs the tests in debug mode.

 * npx playwright codegen
   Auto generate tests with Codegen.

 *  We suggest that you begin by typing:
   npx playwright test
 * */
