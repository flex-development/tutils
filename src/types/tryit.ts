/**
 * @file Type Definitions - Tryit
 * @module tutils/types/Tryit
 */

import type Fn from './fn'

/**
 * Converts `T` to an error-first callback.
 *
 * @template T - Function to convert
 * @template E - Error type
 */
type Tryit<T extends Fn, E extends Error = Error> = Fn<
  Parameters<T>,
  Promise<[err: E, result: null] | [err: null, result: Awaited<ReturnType<T>>]>
>

export type { Tryit as default }
