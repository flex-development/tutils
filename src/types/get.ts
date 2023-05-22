/**
 * @file Type Definitions - Get
 * @module tutils/types/Get
 */

import type At from './at'
import type EmptyArray from './empty-array'
import type EmptyObject from './empty-object'
import type EmptyString from './empty-string'
import type Fallback from './fallback'
import type IfEqual from './if-equal'
import type IndexSignature from './index-signature'
import type NumberString from './number-string'
import type Numeric from './numeric'

/**
 * Retrieves a property value from `T`.
 *
 * Supports dot-notation for nested object paths and array-indexing.
 *
 * @template T - Type to evaluate
 * @template K - Property paths
 * @template F - Fallback value
 */
type Get<T, K extends IndexSignature, F = undefined> = T extends
  | EmptyArray
  | EmptyObject
  | EmptyString
  ? F
  : K extends Exclude<keyof NonNullable<T>, number>
  ? Fallback<NonNullable<T>[K], F, undefined>
  : K extends `${infer H extends NumberString}.${infer Tail}`
  ? NonNullable<T> extends string | readonly unknown[]
    ? H extends Numeric | number
      ? undefined extends At<NonNullable<T>, H>
        ? F
        : IfEqual<
            At<NonNullable<T>, H>,
            NonNullable<At<NonNullable<T>, H>>,
            Get<NonNullable<T>[H & keyof NonNullable<T>], Tail, F>,
            F | Get<NonNullable<T>[H & keyof NonNullable<T>], Tail, F>
          >
      : never
    : H extends keyof NonNullable<T>
    ? IfEqual<
        NonNullable<T>[H],
        NonNullable<NonNullable<T>[H]>,
        Get<NonNullable<T>[H & keyof NonNullable<T>], Tail, F>,
        F | Get<NonNullable<T>[H & keyof NonNullable<T>], Tail, F>
      >
    : Get<NonNullable<T>[H & keyof NonNullable<T>], Tail, F>
  : NonNullable<T> extends string | readonly unknown[]
  ? K extends Numeric | number
    ? At<NonNullable<T>, K, F>
    : F
  : F

export type { Get as default }
