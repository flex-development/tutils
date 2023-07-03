/**
 * @file Type Definitions - OmitIndexSignature
 * @module tutils/types/OmitIndexSignature
 */

import type IfIndexSignature from './if-index-signature'

/**
 * Removes index signatures from `T`, leaving only explicity defined keys.
 *
 * @example
 *  type X = OmitIndexSignature<{
 *    [x: number]: any
 *    [x: string]: any
 *    [x: symbol]: any
 *    [x: `${bigint}`]: string
 *    [x: `${number}`]: string
 *    [x: `data.${string}`]: string
 *    hello: 'world'
 *    foo?: 'bar'
 *  }>
 *  // { hello: 'world'; foo?: 'bar' }
 *
 * @template T - Type to evaluate
 */
type OmitIndexSignature<T> = T extends unknown
  ? { [K in keyof T as IfIndexSignature<T, K, never, K>]: T[K] }
  : never

export type { OmitIndexSignature as default }
