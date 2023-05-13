/**
 * @file Type Definitions - TupleToUnion
 * @module tutils/types/TupleToUnion
 */

/**
 * Converts a [tuple][1] to a [union][2].
 *
 * [1]: https://www.codecademy.com/resources/docs/typescript/tuples
 * [2]: https://www.typescriptlang.org/docs/handbook/unions-and-intersections#union-types
 *
 * @template T - Type to evaluate
 */
type TupleToUnion<T> = T extends readonly unknown[] ? T[number] : never

export type { TupleToUnion as default }
