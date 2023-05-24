/**
 * @file Type Definitions - Predicate
 * @module tutils/types/Predicate
 */

import type Fn from './fn'

/**
 * Function that is called once per each item in `array` and returns a boolean
 * indicating if `item` meets a certain condition.
 *
 * @template T - Array item type
 *
 * @param {T} item - Current array item
 * @param {number} index - Index of `item` in `array`
 * @param {ReadonlyArray<T>} array - Array being queried
 * @return {boolean} `true` if condition is met, `false` otherwise
 */
type Predicate<T = unknown> = Fn<[T, number, readonly T[]], boolean>

export type { Predicate as default }
