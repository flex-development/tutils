/**
 * @file Type Definitions - IfTuple
 * @module tutils/types/IfTuple
 */

import type IsTuple from './is-tuple'

/**
 * Returns a type that indicates if `T` is a [tuple][1].
 *
 * [1]: https://www.codecademy.com/resources/docs/typescript/tuples
 *
 * @see {@linkcode IsTuple}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is a tuple
 * @template False - Type if `T` is not a tuple
 */
type IfTuple<T, True, False> = IsTuple<T> extends true ? True : False

export type { IfTuple as default }
