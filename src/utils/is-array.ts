/**
 * @file Utilities - isArray
 * @module tutils/utils/isArray
 */

/**
 * Checks if `value` is an array.
 *
 * @todo examples
 *
 * @template T - Array item type
 *
 * @param {unknown} value - Value to check
 * @return {value is ReadonlyArray<T> | T[]} `true` if `value` is an array
 */
const isArray = <T>(value: unknown): value is T[] | readonly T[] => {
  return Array.isArray(value)
}

export default isArray
