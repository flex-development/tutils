/**
 * @file Utilities - cast
 * @module tutils/utils/cast
 */

/**
 * Casts `value`.
 *
 * @template T - Return value type
 *
 * @param {unknown} value - Value to cast
 * @return {T} `value`
 */
const cast = <T>(value: unknown): T => value as T

export default cast
