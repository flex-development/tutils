/**
 * @file Utilities - flat
 * @module tutils/utils/flat
 */

import type { Flat, Nilable } from '#src/types'
import cast from './cast'
import fallback from './fallback'
import isNIL from './is-nil'

/**
 * Creates a new array with all sub-array items concatenated recursively up to
 * the specified `depth`.
 *
 * @see {@linkcode Flat}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 *
 * @todo examples
 *
 * @template T - Array to flatten
 * @template D - Maximum recursion depth
 *
 * @param {T} arr - Array to flatten
 * @param {D} [depth=1] - Maximum recursion depth
 * @return {Flat<T, D>} Flattened array
 */
const flat = <
  T extends Nilable<readonly unknown[]>,
  D extends Nilable<number> = 1
>(
  arr: T,
  depth?: D
): Flat<T, D> => cast(fallback(arr, [], isNIL).flat(fallback(depth, 1, isNIL)))

export default flat
