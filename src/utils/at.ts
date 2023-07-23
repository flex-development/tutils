/**
 * @file Utilities - at
 * @module tutils/utils/at
 */

import type { At, NumberLike, Optional } from '#src/types'
import cast from './cast'
import isUndefined from './is-undefined'

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
  T extends string | readonly unknown[],
  K extends NumberLike,
  F = undefined
>(
  target: T,
  index: K,
  fallback?: F
): At<T, K, F> => {
  /**
   * Item or character in {@linkcode target} at {@linkcode index}.
   *
   * @const {Optional<T[number]>} ret
   */
  const ret: Optional<T[number]> = target.at(+index.toString())

  return cast(isUndefined(ret) ? fallback : ret)
}

export default at
