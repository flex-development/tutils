/**
 * @file Type Definitions - OmitIndexSignature
 * @module tutils/types/OmitIndexSignature
 */

import type IfIndexSignature from './if-index-signature'
import type Objectify from './objectify'

/**
 * Removes index signatures from `T`, leaving only explicity defined keys.
 *
 * @example
 *  type X = OmitIndexSignature<{
 *    [x: Numeric]: number
 *    [x: Stringify<bigint>]: bigint
 *    [x: number]: number
 *    [x: string | symbol]: any
 *    [x: `data.${string}`]: string
 *    hello: 'world'
 *    foo?: 'bar'
 *  }>
 *  // { hello: 'world'; foo?: 'bar' }
 *
 * @template T - Type to evaluate
 */
type OmitIndexSignature<T> = T extends unknown
  ? Objectify<T> extends infer U
    ? { [H in keyof U as IfIndexSignature<U, H, never, H>]: U[H] }
    : never
  : never

export type { OmitIndexSignature as default }
