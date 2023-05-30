/**
 * @file Type Definitions - IfObjectCurly
 * @module tutils/types/IfObjectCurly
 */

import type IsObjectCurly from './is-object-curly'

/**
 * Returns a type that indicates if `T` is a curly-braced object.
 *
 * @see {@linkcode IsObjectCurly}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is curly-braced object
 * @template False - Type if `T` is not curly-braced object
 */
type IfObjectCurly<T, True, False> = IsObjectCurly<T> extends true
  ? True
  : False

export type { IfObjectCurly as default }
