/**
 * @file Utilities - isAppEnv
 * @module tutils/utils/isAppEnv
 */

import { AppEnv } from '#src/enums'
import includes from './includes'
import values from './values'

/**
 * Checks if `value` is an app environment.
 *
 * @see {@linkcode AppEnv}
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is AppEnv} `true` if `value` is an app environment
 */
const isAppEnv = (value: unknown): value is AppEnv => {
  return includes(values(AppEnv), value)
}

export default isAppEnv
