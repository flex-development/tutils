/**
 * @file Type Definitions - Falsy
 * @module tutils/types/Falsy
 */

import type EmptyValue from './empty-value'

/**
 * Falsy values union.
 *
 * Falsy types include:
 *
 * - `''`
 * - `0`
 * - `0n`
 * - `false`
 * - `null`
 * - `undefined`
 */
type Falsy = EmptyValue | 0 | 0n | false

export type { Falsy as default }
