/**
 * @file Utilities - fork
 * @module tutils/utils/fork
 */

import type { Predicate } from '#src/types'

/**
 * Splits `array` into two groups.
 *
 * The first group will contain items that meet `condition`. The second group
 * will contain items that do not meet `condition`.
 *
 * @template T - Array item type
 *
 * @param {ReadonlyArray<T>} array - Array to split
 * @param {Predicate<T>} condition - Condition function
 * @return {[T[], T[]]} Condition groups
 */
function fork<T>(array: readonly T[], condition: Predicate<T>): [T[], T[]] {
  /**
   * Items in {@linkcode array} that do not meet {@linkcode condition}.
   *
   * @const {T[]} fail
   */
  const fail: T[] = []

  /**
   * Items in {@linkcode array} that meet {@linkcode condition}.
   *
   * @const {T[]} pass
   */
  const pass: T[] = []

  // split array by condition
  for (const [index, item] of array.entries()) {
    condition(item, index, array) ? pass.push(item) : fail.push(item)
  }

  return [pass, fail]
}

export default fork
