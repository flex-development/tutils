/**
 * @file Type Definitions - ArrayPredicate
 * @module tutils/types/ArrayPredicate
 */

import type Predicate from './predicate'

/**
 * Returns a boolean indicating if `item` meets certain conditions.
 *
 * @template T - Array to evaluate
 *
 * @param {T[number]} item - Current array item
 * @param {number} index - Index of `item` in `array`
 * @param {T} array - Array being evaluated
 * @return {boolean} Boolean indicating if `item` meets given conditions
 */
type ArrayPredicate<T extends readonly unknown[]> = Predicate<
  [item: T[number], index: number, array: T]
>

export type { ArrayPredicate as default }
