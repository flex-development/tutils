import type { Config } from '@jest/types'
import { jsWithTsESM as preset } from 'ts-jest/presets'
import { pathsToModuleNameMapper } from 'ts-jest/utils'
import { compilerOptions } from './tsconfig.json'

/**
 * @file Jest Base Configuration
 * @see https://jestjs.io/docs/next/configuration
 */

const prefix = '<rootDir>/'

const config: Config.InitialOptions = {
  ...preset,
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
      useESM: true
    }
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix }),
  prettierPath: `${prefix}node_modules/prettier`,
  setupFilesAfterEnv: [`${prefix}__tests__/setup.ts`],
  testPathIgnorePatterns: [
    `${prefix}__tests__`,
    `${prefix}src/*/*/__fixtures__`
  ],
  verbose: true
}

export default config
