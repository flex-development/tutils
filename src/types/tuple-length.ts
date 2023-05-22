/**
 * @file Type Definitions - TupleLength
 * @module tutils/types/TupleLength
 */

/**
 * Returns the length of a [tuple][1].
 *
 * [1]: https://www.codecademy.com/resources/docs/typescript/tuples
 *
 * @template T - Type to evaluate
 */
type TupleLength<T> = NonNullable<T> extends readonly unknown[]
  ? NonNullable<T>['length']
  : number

export type { TupleLength as default }
