/**
 * @file Utilities - intersection
 * @module tutils/utils/intersection
 */

import type { Fn, Nilable, NumberString, PropertyKey } from '#src/types'
import includes from './includes'

/**
 * Returns an array of items included in both `array1` and `array2`.
 *
 * An `identity` function can be used to convert array items to unique keys. If
 * provided, two items with the same identity key will be considered equal.
 *
 * @template T - Array item type
 * @template K - Identity key type
 *
 * @param {ReadonlyArray<T>} array1 - First array to evaluate
 * @param {ReadonlyArray<T>} array2 - Second array to evaluate
 * @param {Nilable<Fn<[T], K>>} [identity] - Identity key function
 * @return {T[]} Array of items included in both `array1` and `array2`
 */
function intersection<T, K extends PropertyKey = NumberString>(
  array1: readonly T[],
  array2: readonly T[],
  identity?: Nilable<Fn<[T], K>>
): T[] {
  return array1.filter(item => includes(array2, item, identity))
}

export default intersection
