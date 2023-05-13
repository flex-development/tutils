/**
 * @file Type Definitions - IfTuple
 * @module tutils/types/IfTuple
 */

import type IsTuple from './is-tuple'

/**
 * Conditional type that resolves depending on whether or not `T` is a
 * [tuple][1] type.
 *
 * [1]: https://www.codecademy.com/resources/docs/typescript/tuples
 *
 * @see {@linkcode IsTuple}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is tuple type
 * @template False - Type if `T` is not tuple type
 */
type IfTuple<T, True, False> = IsTuple<T> extends true ? True : False

export type { IfTuple as default }
