import type { Config } from '@jest/types'
import baseConfig from './jest.config.base'
import pkg from './package.json'

/**
 * @file Jest E2E Test Configuration
 * @see https://jestjs.io/docs/next/configuration
 */

const prefix = '<rootDir>'

const config: Config.InitialOptions = {
  ...baseConfig,
  displayName: `${pkg.name.split('/')[1]}/e2e`,
  roots: [`${prefix}__tests__/e2e`]
}

export default config
