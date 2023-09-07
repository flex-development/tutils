/**
 * @file Type Definitions - ArrayTypeGuard
 * @module tutils/types/ArrayTypeGuard
 */

import type ArrayPredicate from './predicate-array'
import type Simplify from './simplify'

/**
 * Checks if `item` is of type `G`.
 *
 * @template T - Array to evaluate
 * @template G - Guarded array item type
 *
 * @param {T[number]} item - Current array item
 * @param {number} index - Index of `item` in `array`
 * @param {T} array - Array being evaluated
 * @return {item is G} `true` if `value` is of type `G`, `false` otherwise
 */
type ArrayTypeGuard<T extends readonly unknown[], G> = ((
  item: T[number],
  index: number,
  array: T
) => item is G) & Simplify<ArrayPredicate<T>>

export type { ArrayTypeGuard as default }
