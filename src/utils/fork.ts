/**
 * @file Utilities - fork
 * @module tutils/utils/fork
 */

import type { Predicate } from '#src/types'
import ifelse from './ifelse'

/**
 * Splits an array into two groups.
 *
 * The first group will contain items that meet `condition`. The second group
 * will contain items that do not meet `condition`.
 *
 * @todo examples
 *
 * @template T - Array to split
 *
 * @param {T} arr - Array to split
 * @param {Predicate<T>} condition - Condition function
 * @return {[T[number][], T[number][]]} Condition groups
 */
const fork = <T extends readonly unknown[]>(
  arr: T,
  condition: Predicate<T>
): [T[number][], T[number][]] => {
  /**
   * Items in {@linkcode arr} that do not meet {@linkcode condition}.
   *
   * @const {T[number][]} fail
   */
  const fail: T[number][] = []

  /**
   * Items in {@linkcode arr} that meet {@linkcode condition}.
   *
   * @const {T[number][]} pass
   */
  const pass: T[number][] = []

  // split array by condition
  for (const [index, item] of arr.entries()) {
    ifelse(condition(item, index, arr), pass, fail).push(item)
  }

  return [pass, fail]
}

export default fork
