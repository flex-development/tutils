/**
 * @file Utilities - ifelse
 * @module tutils/utils/ifelse
 */

import type { Ifelse } from '#src/types'
import cast from './cast'
import isFalsy from './is-falsy'

/**
 * Returns `truthy` if `condition` is truthy, or `falsy` if `condition` is
 * falsy.
 *
 * @see {@linkcode Ifelse}
 * @see {@linkcode isFalsy}
 *
 * @todo examples
 *
 * @template U - Condition type
 * @template T - Truthy value type
 * @template F - Falsy value type
 *
 * @param {U} condition - Condition to evaluate
 * @param {T} truthy - Value to return if `condition` is truthy
 * @param {F} falsy - Value to return if `condition` is falsy
 * @return {Ifelse<U, T, F>} Condition result
 */
const ifelse = <U, T, F>(
  condition: U,
  truthy: T,
  falsy: F
): Ifelse<U, T, F> => {
  return cast(isFalsy(condition) ? falsy : truthy)
}

export default ifelse
