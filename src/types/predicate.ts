/**
 * @file Type Definitions - Predicate
 * @module tutils/types/Predicate
 */

import type Mapper from './mapper'

/**
 * Function called once per each item in an array and returns a `boolean` value
 * that indicates if an item meets certain conditions.
 *
 * @template T - Array being evaluated
 *
 * @param {T[number]} item - Current array item
 * @param {number} index - Index of `item` in `array`
 * @param {T} array - Array being evaluated
 * @return {boolean} Boolean indicating if `item` meets given conditions
 */
type Predicate<T extends readonly unknown[]> = Mapper<T, boolean>

export type { Predicate as default }
