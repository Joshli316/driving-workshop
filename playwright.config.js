// Uses NODE_PATH=~/.local/share/playwright-test/node_modules at runtime
// so this project doesn't ship its own node_modules (per repo convention).
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: { baseURL: 'http://localhost:8763' },
  webServer: {
    command: 'python3 -m http.server 8763',
    port: 8763,
    reuseExistingServer: !process.env.CI,
  },
});
