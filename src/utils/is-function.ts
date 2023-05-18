/**
 * @file Utilities - isFunction
 * @module tutils/utils/isFunction
 */

import type { Fn } from '#src/types'

/**
 * Checks if `value` is a function.
 *
 * @template A - Function arguments type
 * @template R - Function return type
 *
 * @param {unknown} value - Value to check
 * @return {value is Fn<A, R>} `true` if `value` is a function
 */
function isFunction<A extends any[], R>(value: unknown): value is Fn<A, R> {
  return typeof value === 'function'
}

export default isFunction
