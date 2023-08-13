/**
 * @file Utilities - fallback
 * @module tutils/utils/fallback
 */

import type { Fallback, Fn, TypeGuard } from '#src/types'
import cast from './cast'
import ifelse from './ifelse'
import isUndefined from './is-undefined'

/**
 * Fallback condition function.
 *
 * @internal
 *
 * @template T - Target value type
 * @template C - Fallback condition type
 */
type Condition<T, C> = Fn<[T], boolean> | TypeGuard<C>

/**
 * Returns a `fallback` value if `target` meets the given fallback `condition`.
 *
 * @todo examples
 *
 * @template T - Target value type
 * @template F - Fallback value type
 * @template C - Fallback condition type
 *
 * @param {T} target - Target value
 * @param {F} fallback - Fallback value
 * @param {Condition<T, C>} [condition=isUndefined] - Fallback condition
 * @return {Fallback<T, F, C>} Target value or `fallback`
 */
const fallback = <T, F, C = undefined>(
  target: T,
  fallback: F,
  condition: Condition<T, C> = isUndefined
): Fallback<T, F, C> => cast(ifelse(condition(target), fallback, target))

export default fallback
