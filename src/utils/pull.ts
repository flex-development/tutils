/**
 * @file Utilities - pull
 * @module tutils/utils/pull
 */

import type { Fn, Nilable, PropertyKey } from '#src/types'
import includes from './includes'
import select from './select'

/**
 * Removes all specified items from an array without modifying it.
 *
 * @see {@linkcode includes}
 * @see {@linkcode select}
 *
 * @todo examples
 *
 * @template T - Array item type
 * @template K - Identity key type
 * @template U - Filtered array item type
 *
 * @param {ReadonlyArray<T>} arr - Array to filter
 * @param {ReadonlyArray<T>} drop - Items to remove
 * @param {Nilable<Fn<[T], K>>} [identity] - Identity key function
 * @return {U[]} New array without items in `drop`
 */
const pull = <T, K extends PropertyKey = PropertyKey, U = T>(
  arr: readonly T[],
  drop: readonly T[],
  identity?: Nilable<Fn<[T], K>>
): U[] => select(arr, item => !includes(drop, item, null, identity))

export default pull
