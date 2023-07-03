/**
 * @file Type Definitions - Stringify
 * @module tutils/types/Stringify
 */

import type Joinable from './joinable'

/**
 * Converts `T` to a string if `T` extends {@linkcode Joinable}.
 *
 * @example
 *  type X = Stringify<1>
 *  // '1'
 * @example
 *  type X = Stringify<boolean>
 *  // 'false' | 'true'
 * @example
 *  type X = Stringify<'y'>
 *  // 'y'
 * @example
 *  type X = Stringify<string>
 *  // string
 * @example
 *  type X = Stringify<{ hello: 'world' }>
 *  // never
 * @example
 *  type X = Stringify<any>
 *  // `${any}`
 * @example
 *  type X = Stringify<never>
 *  // never
 * @example
 *  type X = Stringify<unknown>
 *  // never
 *
 * @template T - Type to evaluate
 */
type Stringify<T> = T extends Joinable ? `${T}` : never

export type { Stringify as default }
