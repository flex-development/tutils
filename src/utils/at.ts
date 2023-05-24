/**
 * @file Utilities - at
 * @module tutils/utils/at
 */

import type { At, Numeric } from '#src/types'
import isUndefined from './is-undefined'

/**
 * Returns the array item or character in `value` at `index`.
 *
 * Negative indices will count from the end of `value`.
 *
 * @template T - Value to index
 * @template K - Index type
 * @template F - Fallback value type
 *
 * @param {T} value - Value to index
 * @param {K} index - Position of array item or character to retrieve
 * @param {F} [fallback] - Fallback value
 * @return {At<T, K, F>} Indexed value or `fallback`
 */
function at<
  T extends string | readonly unknown[],
  K extends Numeric | number,
  F = undefined
>(value: T, index: K, fallback?: F): At<T, K, F> {
  /**
   * Item or character in {@linkcode value} at {@linkcode index}.
   *
   * @const {F | T[0]} ret
   */
  const ret: F | T[0] = value.at(index as number)

  return (isUndefined(ret) ? fallback : ret) as At<T, K, F>
}

export default at
