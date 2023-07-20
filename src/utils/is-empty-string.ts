/**
 * @file Utilities - isEmptyString
 * @module tutils/utils/isEmptyString
 */

import type { EmptyString } from '#src/types'
import equal from './equal'

/**
 * Checks if `value` is an empty string.
 *
 * @see {@linkcode EmptyString}
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is EmptyString} `true` if `value` is empty string
 */
const isEmptyString = (value: unknown): value is EmptyString => equal('', value)

export default isEmptyString
