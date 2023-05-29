/**
 * @file Type Definitions - Falsy
 * @module tutils/types/Falsy
 */

import type EmptyString from './empty-string'
import type NIL from './nil'

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
type Falsy = EmptyString | NIL | 0 | 0n | false

export type { Falsy as default }
