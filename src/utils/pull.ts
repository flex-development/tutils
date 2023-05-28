/**
 * @file Utilities - pull
 * @module tutils/utils/pull
 */

import type { Fn, Nilable, NumberString, PropertyKey } from '#src/types'
import includes from './includes'
import select from './select'

/**
 * Removes all items in `drop` from `array` without modifying `array`.
 *
 * @template T - Array item type
 * @template K - Identity key type
 *
 * @param {ReadonlyArray<T>} array - Array to evaluate
 * @param {ReadonlyArray<T>} drop - Items to remove
 * @param {Nilable<Fn<[T], K>>} [identity] - Identity key function
 * @return {T[]} New array without items in `drop`
 */
function pull<T, K extends PropertyKey = NumberString>(
  array: readonly T[],
  drop: readonly T[],
  identity?: Nilable<Fn<[T], K>>
): T[] {
  return select(array, (item: T): boolean => !includes(drop, item, identity))
}

export default pull
