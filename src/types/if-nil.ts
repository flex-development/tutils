/**
 * @file Type Definitions - IfNil
 * @module tutils/types/IfNil
 */

import type IsNil from './is-nil'

/**
 * Conditional type that resolves depending on whether or not `T` extends `NIL`.
 *
 * @see {@linkcode IsNil}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is `nil`
 * @template False - Type if `T` is not `nil`
 */
type IfNil<T, True, False> = IsNil<T> extends true ? True : False

export type { IfNil as default }
