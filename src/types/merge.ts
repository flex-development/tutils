/**
 * @file Type Definitions - Merge
 * @module tutils/types/Merge
 */

import type EmptyObject from './empty-object'
import type ObjectCurly from './object-curly'
import type Simplify from './simplify'

/**
 * Merges two types into one.
 *
 * Keys of `U` override `T`.
 *
 * @template T - Target object
 * @template U - Source object
 */
type Merge<
  T extends ObjectCurly,
  U extends ObjectCurly = EmptyObject
> = U extends EmptyObject ? T : Simplify<Omit<T, keyof U> & U>

export type { Merge as default }
