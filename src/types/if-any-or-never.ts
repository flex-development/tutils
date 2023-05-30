/**
 * @file Type Definitions - IfAnyOrNever
 * @module tutils/types/IfAnyOrNever
 */

import type IsAnyOrNever from './is-any-or-never'

/**
 * Returns a type that indicates if `T` is `any` or `never`.
 *
 * @see {@linkcode IsAnyOrNever}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is `any` or `never`
 * @template False - Type if `T` is not `any` or `never`
 */
type IfAnyOrNever<T, True, False> = IsAnyOrNever<T> extends true ? True : False

export type { IfAnyOrNever as default }
