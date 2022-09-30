/**
 * @file Type Guards - isAppEnv
 * @module tutils/guards/isAppEnv
 */

import AppEnv from '#src/enums/app-env'

/**
 * Checks if `value` is an {@link AppEnv}.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `value` is valid app environment
 */
const isAppEnv = (value?: any): value is AppEnv => {
  return Object.values(AppEnv).includes(value as AppEnv)
}

export default isAppEnv
