/**
 * @file Type Definitions - IfObjectPlain
 * @module tutils/types/IfObjectPlain
 */

import type IsObjectPlain from './is-object-plain'

/**
 * Returns a type that indicates if `T` is a plain object.
 *
 * @see {@linkcode IsObjectPlain}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is plain object
 * @template False - Type if `T` is not plain object
 */
type IfObjectPlain<T, True, False> = IsObjectPlain<T> extends true
  ? True
  : False

export type { IfObjectPlain as default }
