/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', // .ts / .js
    '**/?(*.)+(spec|test).[jt]s?(x)', // *.spec/test.ts / *.spec/test.js
  ],
  modulePathIgnorePatterns: ['mocks'],
};
