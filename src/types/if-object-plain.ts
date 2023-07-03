/**
 * @file Type Definitions - IfObjectPlain
 * @module tutils/types/IfObjectPlain
 */

import type IfNever from './if-never'
import type IsObjectPlain from './is-object-plain'

/**
 * Returns a type that indicates if `U` extends `ObjectPlain`.
 *
 * @see {@linkcode IsObjectPlain}
 *
 * @todo examples
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `ObjectPlain`
 * @template F - Type if `U` does not extend `ObjectPlain`
 */
type IfObjectPlain<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsObjectPlain<U> extends true ? T : F) : F
>

export type { IfObjectPlain as default }
