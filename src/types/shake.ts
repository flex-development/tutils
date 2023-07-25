/**
 * @file Type Definitions - Shake
 * @module tutils/types/Shake
 */

import type ObjectCurly from './object-curly'

/**
 * Filter `T` by removing keys where the key-value non-distributively extends
 * filter condition `F`, and exclude `F` from any remaining key values.
 *
 * **Note**: Does **not** make optional keys required.
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template F - Key value filter
 */
type Shake<T extends ObjectCurly, F = undefined> = T extends unknown
  ? { [K in keyof T as T[K] extends F ? never : K]: Exclude<T[K], F> }
  : never

export type { Shake as default }
