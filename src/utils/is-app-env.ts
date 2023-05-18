/**
 * @file Utilities - isAppEnv
 * @module tutils/utils/isAppEnv
 */

import AppEnv from '#src/enums/app-env'
import includes from './includes'

/**
 * Checks if `value` is a valid app environment.
 *
 * @param {unknown} value - Value to check
 * @return {value is AppEnv} `true` if `value` is {@linkcode AppEnv}
 */
const isAppEnv = (value: unknown): value is AppEnv => {
  return includes(Object.values(AppEnv), value)
}

export default isAppEnv
