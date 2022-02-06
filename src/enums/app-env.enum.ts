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
  DEV = 'development',
  PROD = 'production',
  STG = 'staging',
  TEST = 'test'
}

export default AppEnv
