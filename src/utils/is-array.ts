/**
 * @file Utilities - isArray
 * @module tutils/utils/isArray
 */

import isObject from './is-object'

/**
 * Checks if `value` is an array.
 *
 * @template T - Array item type
 *
 * @param {unknown} value - Value to check
 * @return {value is ReadonlyArray<T> | T[]} `true` if `value` is an array
 */
function isArray<T>(value: unknown): value is T[] | readonly T[] {
  return isObject(value) && Reflect.get(value, 'constructor') === Array
}

export default isArray
