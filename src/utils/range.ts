/**
 * @file Utilities - range
 * @module tutils/utils/range
 */

import type { Fn, Nilable } from '#src/types'
import isFunction from './is-function'
import isNIL from './is-nil'

/**
 * Returns a generator that `yield`s values from `min` to `max` by `step` size.
 *
 * Range indices can be interpolated using a `map` operation.
 *
 * @template T - Generated value type
 *
 * @generator
 * @yield {T}
 * @next {void}
 *
 * @param {number} min - Lower bound of range (inclusive)
 * @param {Nilable<number>} [max=min] - Upper bound of range (inclusive)
 * @param {Nilable<number>} [step=1] - Increment value
 * @param {Nilable<Fn<[number], T>> | T} [map] - Index interpolator
 * @return {Generator<T, void, void>} Range generator
 */
function* range<T = number>(
  min: number,
  max: Nilable<number> = null,
  step: Nilable<number> = null,
  map?: Nilable<Fn<[number], T>> | T
): Generator<T, void, void> {
  map ??= (index: number) => index as T
  step = step ??= 1

  for (let i = !isNIL(max) ? min : 0; i <= (max ??= min); i += step) {
    yield (isFunction<[number], T>(map) ? map : () => map)(i) as T
    if (i + step > max) break
  }
}

export default range
