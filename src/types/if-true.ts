/**
 * @file Type Definitions - IfTrue
 * @module tutils/types/IfTrue
 */

import type IsTrue from './is-true'

/**
 * Returns a type that indicates if `T` is `true`.
 *
 * @see {@linkcode IsTrue}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is `true`
 * @template False - Type if `T` is not `true`
 */
type IfTrue<T, True, False> = IsTrue<T> extends true ? True : False

export type { IfTrue as default }
