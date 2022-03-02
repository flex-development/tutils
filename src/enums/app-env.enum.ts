/**
 * @file Enums - AppEnv
 * @module tutils/enums/AppEnv
 */

/**
 * Application environments.
 *
 * @enum {Lowercase<string>}
 */
enum AppEnv {
  CI = 'ci',
  DEV = 'development',
  PROD = 'production',
  STG = 'staging',
  TEST = 'test'
}

export default AppEnv
