/**
 * @file Type Definitions - IfNil
 * @module tutils/types/IfNil
 */

import type IsNil from './is-nil'

/**
 * Returns a type that indicates if `T` is `NIL`.
 *
 * @see {@linkcode IsNil}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is `NIL`
 * @template False - Type if `T` is not `NIL`
 */
type IfNil<T, True, False> = IsNil<T> extends true ? True : False

export type { IfNil as default }
