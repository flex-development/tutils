/**
 * @file Type Guards - isFunction
 * @module tutils/guards/isFunction
 */

import type { Fn } from '#src/types'

/**
 * Checks if the given `value` is a function.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is Fn} `true` if `value` is a function
 */
const isFunction = (value: unknown): value is Fn => typeof value === 'function'

export default isFunction
