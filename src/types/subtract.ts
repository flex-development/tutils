/**
 * @file Type Definitions - Subtract
 * @module tutils/types/Subtract
 */

import type Times from './times'

/**
 * Returns the difference between `M` and `S`.
 *
 * @internal
 *
 * @template M - Minuend
 * @template S - Subtrahend
 */
// dprint-ignore
type Subtract<M extends number, S extends number> = M extends number
  ? S extends number
    ? Times<M> extends [...Times<S>, ...infer R]
      ? R['length']
      : never
    : never
  : never

export type { Subtract as default }
