const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const esModules = [];

const tscPaths = Object.entries(compilerOptions.paths)
  .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

module.exports = {
  // preset: 'react-native',
  // setupFiles: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: pathsToModuleNameMapper(tscPaths, { prefix: '<rootDir>' }),
  transformIgnorePatterns: [`node_modules/(?!${esModules.join('|')})`],
  testMatch: ['<rootDir>/src/**/*.spec.(ts|tsx)'],
  collectCoverageFrom: ['<rootDir>/src/**/*.(ts|tsx)'],
  coverageDirectory: '<rootDir>/.jest/coverage',
};
