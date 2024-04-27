import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "./src/tests/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "./src/tests/e2e.config.ts",
    fixturesFolder: "./src/tests/e2e/fixtures",
  },
});
