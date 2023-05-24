/**
 * @file Type Definitions - Overwrite
 * @module tutils/types/Overwrite
 */

import type Simplify from './simplify'

/**
 * Replaces existing properties in `T` with properties in `U`.
 *
 * @template T - Base type
 * @template U - Type containing replacement values
 */
type Overwrite<T, U> = Simplify<{
  [K in keyof T]: K extends keyof U ? U[K] : T[K]
}>

export type { Overwrite as default }
