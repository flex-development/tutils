/**
 * @file Utilities - unique
 * @module tutils/utils/unique
 */

import type { Fn, NumberString, PropertyKey } from '#src/types'
import includes from './includes'

/**
 * Removes all duplicates from `array`.
 *
 * An `identity` function can be used to convert array items to unique keys. If
 * provided, two items with the same identity key will be considered equal.
 *
 * @template T - Array item type
 * @template K - Identity key type
 *
 * @param {ReadonlyArray<T>} array - Array to evaluate
 * @param {Fn<[T], K>} [identity] - Function used to identify array items
 * @return {T[]} `array` with duplicates removed
 */
function unique<T, K extends PropertyKey = NumberString>(
  array: readonly T[],
  identity?: Fn<[T], K>
): T[] {
  return array.length <= 1
    ? [...array]
    : array.reduce<T[]>((acc: T[], curr: T): T[] => {
        return includes(acc, curr, identity) ? acc : [...acc, curr]
      }, [])
}

export default unique
