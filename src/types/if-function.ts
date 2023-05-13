/**
 * @file Type Definitions - IfFunction
 * @module tutils/types/IfFunction
 */

import type IsFunction from './is-function'

/**
 * Conditional type that resolves depending on whether or not `T` extends
 * `Fn`.
 *
 * @see {@linkcode IsFunction}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` extends `Fn`
 * @template False - Type if `T` does not extend `Fn`
 */
type IfFunction<T, True, False> = IsFunction<T> extends true ? True : False

export type { IfFunction as default }
