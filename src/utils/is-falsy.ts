/**
 * @file Utilities - isFalsy
 * @module tutils/utils/isFalsy
 */

import type { Falsy } from '#src/types'
import includes from './includes'
import isEmptyValue from './is-empty-value'
import isFalse from './is-false'
import isNaN from './is-nan'

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
const isFalsy = (value: unknown): value is Falsy => {
  return (
    isEmptyValue(value) ||
    isFalse(value) ||
    isNaN(value) ||
    includes([0, 0n], value)
  )
}

export default isFalsy
