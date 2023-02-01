/**
 * @file Fixtures - OrderedPair
 * @module fixtures/OrderedPair
 */

/**
 * Pair of numbers representing a single point on a two-dimensional grid.
 *
 * @see https://splashlearn.com/math-vocabulary/geometry/ordered-pair
 */
interface IOrderedPair {
  x: number
  y: number
}

/**
 * Pair of numbers representing a single point on a two-dimensional grid.
 *
 * @see https://splashlearn.com/math-vocabulary/geometry/ordered-pair
 */
type TOrderedPair = {
  x: number
  y: number
}

export type { IOrderedPair, TOrderedPair }
