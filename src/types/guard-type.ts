/**
 * @file Type Definitions - TypeGuard
 * @module tutils/types/TypeGuard
 */

import type Predicate from './predicate'
import type Simplify from './simplify'

/**
 * Checks if `value` is of type `T`.
 *
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
 *
 * @template T - Guarded value type
 *
 * @param {unknown} value - Value to check
 * @return {value is T} `true` if `value` is of type `T`, `false` otherwise
 */
type TypeGuard<T> = ((value: unknown) => value is T) & Simplify<Predicate>

export type { TypeGuard as default }
