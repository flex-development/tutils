/**
 * @file Utilities - isFunction
 * @module tutils/utils/isFunction
 */

import type { Fn } from '#src/types'

/**
 * Checks if `value` is a function.
 *
 * @todo examples
 *
 * @template A - Function arguments type
 * @template R - Function return type
 *
 * @param {unknown} value - Value to check
 * @return {value is Fn<A, R>} `true` if `value` is a function
 */
const isFunction = <A extends readonly unknown[] = any[], R = any>(
  value: unknown
): value is Fn<A, R> => typeof value === 'function'

export default isFunction
