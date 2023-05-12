/**
 * @file Type Guards - isNodeEnv
 * @module tutils/utils/isNodeEnv
 */

import NodeEnv from '#src/enums/node-env'

/**
 * Checks if the given `value` is a valid node environment.
 *
 * @param {unknown} [value=process.env.NODE_ENV] - Value to evaluate
 * @return {value is NodeEnv} `true` if `value` is {@linkcode NodeEnv}
 */
const isNodeEnv = (value: unknown = process.env.NODE_ENV): value is NodeEnv => {
  return Object.values(NodeEnv).includes(value as NodeEnv)
}

export default isNodeEnv
