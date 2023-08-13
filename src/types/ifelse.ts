/**
 * @file Type Definitions - Ifelse
 * @module tutils/types/Ifelse
 */

import type Falsy from './falsy'
import type IsNever from './is-never'

/**
 * Return `T` if `U` is truthy, or `F` if `U` extends {@linkcode Falsy}.
 *
 * @todo examples
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` is truthy
 * @template F - Type if `U` extends {@linkcode Falsy}
 */
type Ifelse<U, T, F> = IsNever<U> extends true ? F : U extends Falsy ? F : T

export type { Ifelse as default }
