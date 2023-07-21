/**
 * @file Utilities - ifelse
 * @module tutils/utils/ifelse
 */

import cast from './cast'
import isFalsy from './is-falsy'

/**
 * Returns `truthy` if `condition` is truthy, or `falsy` if `condition` is
 * falsy.
 *
 * @see {@linkcode isFalsy}
 *
 * @todo examples
 *
 * @template U - Condition to evaluate
 * @template T - Truthy value type
 * @template F - Falsy value type
 *
 * @param {U} condition - Condition to evaluate
 * @param {T} truthy - Value to return if `condition` is truthy
 * @param {F} falsy - Value to return if `condition` is falsy
 * @return {F | T} Condition result
 */
const ifelse = <U, T, F>(condition: U, truthy: T, falsy: F): F | T => {
  return cast(isFalsy(condition) ? falsy : truthy)
}

export default ifelse
