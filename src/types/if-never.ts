/**
 * @file Type Definitions - IfNever
 * @module tutils/types/IfNever
 */

import type IsNever from './is-never'

/**
 * Conditional type that resolves depending on whether or not `T` is type
 * `never`.
 *
 * @see {@linkcode IsNever}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is type `never`
 * @template False - Type if `T` is not type `never`
 */
type IfNever<T, True, False> = IsNever<T> extends true ? True : False

export type { IfNever as default }
