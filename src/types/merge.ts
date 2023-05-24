/**
 * @file Type Definitions - Merge
 * @module tutils/types/Merge
 */

import type EmptyObject from './empty-object'
import type ObjectAny from './object-any'
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
  T extends ObjectAny,
  U extends ObjectAny = EmptyObject
> = U extends EmptyObject ? T : Simplify<Omit<T, keyof U> & U>

export type { Merge as default }
