/**
 * @file Utilities - range
 * @module tutils/utils/range
 */

import type { Fn, Nilable } from '#src/types'
import cast from './cast'
import constant from './constant'
import isFunction from './is-function'
import isNIL from './is-nil'

/**
 * Returns a generator that `yield`s values from `min` to `max` by `step` size.
 *
 * Range indices can be interpolated using a `map` operation.
 *
 * @todo examples
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
  map ??= (index: number) => cast(index)
  step = step ??= 1

  for (let i = isNIL(max) ? 0 : min; i <= (max ??= min); i += step) {
    yield cast((isFunction(map) ? map : constant(map))(i))
    if (i + step > max) break
  }
}

export default range
