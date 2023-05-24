/**
 * @file Utilities - diff
 * @module tutils/utils/diff
 */

import type { Fn, IndexSignature, Nilable, NumberString } from '#src/types'
import includes from './includes'
import intersects from './intersects'

/**
 * Returns an array of items included in `array1` but not included in `array2`.
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
 * @return {T[]} Array of items from `array1` not included in `array2`
 */
function diff<T, K extends IndexSignature = NumberString>(
  array1: readonly T[],
  array2: readonly T[],
  identity?: Nilable<Fn<[T], K>>
): T[] {
  return !intersects(array1, array2, identity)
    ? [...array1]
    : array1.reduce<T[]>((acc: T[], curr: T): T[] => {
        return includes(array2, curr, identity) ? acc : [...acc, curr]
      }, [])
}

export default diff
