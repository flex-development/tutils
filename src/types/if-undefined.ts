/**
 * @file Type Definitions - IfUndefined
 * @module tutils/types/IfUndefined
 */

import type IsUndefined from './is-undefined'

/**
 * Conditional type that resolves depending on whether or not `T` extends
 * `undefined`.
 *
 * @see {@linkcode IsUndefined}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` extends `undefined`
 * @template False - Type if `T` does not extend `undefined`
 */
type IfUndefined<T, True, False> = IsUndefined<T> extends true ? True : False

export type { IfUndefined as default }
