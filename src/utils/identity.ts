/**
 * @file Utilities - identity
 * @module tutils/utils/identity
 */

/**
 * Returns `value` without modifications.
 *
 * @template T - Value type
 *
 * @param {T} value - Value to return
 * @return {T} `value`
 */
function identity<T>(value: T): T {
  return value
}

export default identity
