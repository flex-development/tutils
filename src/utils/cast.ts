/**
 * @file Utilities - cast
 * @module tutils/utils/cast
 */

/**
 * Casts `value`.
 *
 * @template R - Return value type
 *
 * @param {unknown} value - Value to cast
 * @return {R} `value`
 */
function cast<R>(value: unknown): R {
  return value as R
}

export default cast
