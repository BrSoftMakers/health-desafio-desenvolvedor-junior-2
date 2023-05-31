/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    'interfaces',
    'repositories',
    'middlewares',
    'tests/factories/',
    'jestGlobalMocks.ts',
    'routers',
    'schemas',
    'types',
    'utils',
    'app',
    'database',
    'server',
  ],
};
