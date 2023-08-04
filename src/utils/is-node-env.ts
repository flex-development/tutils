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
 * @param {unknown} value - Value to check
 * @return {value is NodeEnv} `true` if `value` is a node environment
 */
const isNodeEnv = (value: unknown): value is NodeEnv => {
  return includes(values(NodeEnv), value)
}

export default isNodeEnv
