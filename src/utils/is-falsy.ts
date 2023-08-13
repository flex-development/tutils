/**
 * @file Utilities - isFalsy
 * @module tutils/utils/isFalsy
 */

import type { Falsy } from '#src/types'

/**
 * Checks if `value` is {@linkcode Falsy}.
 *
 * Falsy values include:
 *
 * - `''`
 * - `0`
 * - `0n`
 * - `Number.NaN`
 * - `false`
 * - `null`
 * - `undefined`
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Falsy} `true` if `value` is falsy
 */
const isFalsy = (value: unknown): value is Falsy => (value ? false : true)

export default isFalsy
