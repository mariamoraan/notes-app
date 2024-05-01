import baseConfig from "./jest.config";
import type { Config } from "jest";

const config: Config = {
  ...baseConfig,
  setupFilesAfterEnv: ["<rootDir>/src/tests/jest.setup.ts"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
};

export default config;
