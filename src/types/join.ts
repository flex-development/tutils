/**
 * @file Type Definitions - Join
 * @module tutils/types/Join
 */

import type EmptyArray from './empty-array'
import type EmptyString from './empty-string'
import type Fallback from './fallback'
import type Joinable from './joinable'
import type NIL from './nil'
import type Nilable from './nilable'
import type Stringify from './stringify'

/**
 * Converts array `T` to a single string delimited by `S`.
 *
 * If `S` is omitted, items will be separated with a comma (`,`).
 *
 * @see {@linkcode Joinable}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 * @todo examples
 *
 * @template T - Array to join
 * @template S - Array item separator
 */
type Join<
  T extends Nilable<readonly unknown[]>,
  S extends Nilable<string> = ','
> = // dprint-ignore
  T extends Nilable<Readonly<EmptyArray>>
  ? EmptyString
  : T extends readonly [(infer H)?]
  ? Stringify<Fallback<H extends Joinable ? H : string, EmptyString, NIL>>
  : T extends readonly [infer H, ...infer R extends unknown[]]
  ? `${Fallback<H extends Joinable ? H : string, EmptyString, NIL>}${Fallback<
      S,
      ',',
      NIL
    >}${Join<R, S>}`
  : T extends readonly [...infer R extends unknown[], infer L]
  ? `${Join<R, S>}${Fallback<S, ',', NIL>}${Fallback<
      L extends Joinable ? L : string,
      EmptyString,
      NIL
    >}`
  : string

export type { Join as default }
