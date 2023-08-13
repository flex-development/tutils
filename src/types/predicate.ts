/**
 * @file Type Definitions - Predicate
 * @module tutils/types/Predicate
 */

import type Fn from './fn'

/**
 * Returns a boolean that indicates if an input value meets certain conditions.
 *
 * @template T - Predicate arguments type
 *
 * @param {T} args - Predicate arguments
 * @return {boolean} Boolean indicating if input value meets given conditions
 */
type Predicate<T extends readonly unknown[] = [value: unknown]> = Fn<T, boolean>

export type { Predicate as default }
