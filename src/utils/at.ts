/**
 * @file Utilities - at
 * @module tutils/utils/at
 */

import type { At, Nilable, NumberLike } from '#src/types'
import cast from './cast'
import fb from './fallback'
import isNIL from './is-nil'

/**
 * Returns the item or character in `target` value at `index`.
 *
 * Negative indices will count from the end of `target`.
 *
 * @see {@linkcode At}
 *
 * @todo examples
 *
 * @template T - Array or string to index
 * @template K - Zero-based index
 * @template F - Fallback value type
 *
 * @param {T} target - Array or string to index
 * @param {K} index - Zero-based position of item or character to retrieve
 * @param {F} [fallback] - Fallback value
 * @return {At<T, K, F>} Indexed value or `fallback`
 */
const at = <
  T extends Nilable<string | readonly unknown[]>,
  K extends NumberLike,
  F = undefined
>(
  target: T,
  index: K,
  fallback?: F
): At<T, K, F> => cast(fb(fb(target, [], isNIL).at(+index), fallback))

export default at
