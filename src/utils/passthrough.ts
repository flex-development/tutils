/**
 * @file Utilities - passthrough
 * @module tutils/utils/passthrough
 */

/**
 * Returns `value` without modifications.
 *
 * @template T - Passthrough value type
 *
 * @param {T} value - Value to return
 * @return {T} `value`
 */
function passthrough<T>(value: T): T {
  return value
}

export default passthrough
