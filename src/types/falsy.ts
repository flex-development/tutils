/**
 * @file Type Definitions - Falsy
 * @module tutils/types/Falsy
 */

import type EmptyValue from './empty-value'
import type NaN from './nan'

/**
 * Falsy values union.
 *
 * Falsy types include:
 *
 * - `''`
 * - `0`
 * - `0n`
 * - `NaN`
 * - `false`
 * - `null`
 * - `undefined`
 *
 * @see {@linkcode EmptyValue}
 * @see {@linkcode NaN}
 */
type Falsy = EmptyValue | NaN | 0 | 0n | false

export type { Falsy as default }
