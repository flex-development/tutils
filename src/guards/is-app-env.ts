/**
 * @file Type Guards - isAppEnv
 * @module tutils/guards/isAppEnv
 */

import AppEnv from '#src/enums/app-env'

/**
 * Checks if the given `value` is a valid app environment.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is AppEnv} `true` if `value` is {@linkcode AppEnv}
 */
const isAppEnv = (value: unknown): value is AppEnv => {
  return Object.values(AppEnv).includes(value as AppEnv)
}

export default isAppEnv
