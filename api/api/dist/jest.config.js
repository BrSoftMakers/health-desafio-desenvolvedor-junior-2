"use strict";
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    coverageProvider: 'v8',
    preset: 'ts-jest',
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)', // *.spec/test.ts / *.spec/test.js
    ],
    modulePathIgnorePatterns: ['mocks'],
};
//# sourceMappingURL=jest.config.js.map