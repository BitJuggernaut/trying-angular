import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  test: {
    globals: false,
    environment: 'jsdom', // needed for DOM rendering
    setupFiles: './vitest.setup.ts', // point to the setup file
    browser: {
      provider: playwright(),
      enabled: true,
      instances: [{ browser: 'chromium' }],
    },
  },
});
