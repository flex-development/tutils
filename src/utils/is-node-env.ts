/**
 * @file Utilities - isNodeEnv
 * @module tutils/utils/isNodeEnv
 */

import NodeEnv from '#src/enums/node-env'
import includes from './includes'

/**
 * Checks if `value` is a valid node environment.
 *
 * @param {unknown} [value=process.env.NODE_ENV] - Value to check
 * @return {value is NodeEnv} `true` if `value` is {@linkcode NodeEnv}
 */
const isNodeEnv = (value: unknown = process.env.NODE_ENV): value is NodeEnv => {
  return includes(Object.values(NodeEnv), value)
}

export default isNodeEnv
