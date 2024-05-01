import baseConfig from "./jest.config";
import type { Config } from "jest";

const config: Config = {
  ...baseConfig,
  setupFilesAfterEnv: ["<rootDir>/src/tests/jest.setup-integration.ts"],
  testMatch: ["**/*.it.ts", "**/*.it.tsx"],
};

export default config;
