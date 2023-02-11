/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  coverageProvider: "v8",
  preset: "ts-jest",
  modulePathIgnorePatterns: ["mocks"],
  testMatch: [
    "**/__tests__/**/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
  ],
};
