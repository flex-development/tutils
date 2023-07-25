/**
 * @file Utilities - isNodeEnv
 * @module tutils/utils/isNodeEnv
 */

import { NodeEnv } from '#src/enums'
import includes from './includes'
import values from './values'

/**
 * Checks if `value` is a node environment.
 *
 * @see {@linkcode NodeEnv}
 *
 * @todo examples
 *
 * @param {unknown} [value=process.env.NODE_ENV] - Value to check
 * @return {value is NodeEnv} `true` if `value` is a node environment
 */
const isNodeEnv = (value: unknown = process.env.NODE_ENV): value is NodeEnv => {
  return includes(values(NodeEnv), value)
}

export default isNodeEnv
