/**
 * @file Utilities - isPromise
 * @module tutils/utils/isPromise
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode Promise}.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise
 *
 * @todo examples
 *
 * @template T - Resolved promise type
 *
 * @param {unknown} value - Value to check
 * @return {value is Promise<T>} `true` if `value` is a promise
 */
const isPromise = <T>(value: unknown): value is Promise<T> => {
  return isObject(value) && equal(value.constructor, Promise)
}

export default isPromise
