/**
 * @file Custom Matchers - descriptor
 * @module tests/setup/matchers/descriptor
 */

import type { PropertyDescriptor } from '#src/interfaces'
import type { Optional } from '#src/types'
import type { MatcherState, SyncExpectationResult } from '@vitest/expect'
import isEqual from 'lodash.isequal'

/**
 * Asserts `target` has its own property descriptor for the given `key`.
 *
 * Enumerable and non-enumerable properties are included in the search.
 *
 * @template T - Property value type
 *
 * @this {MatcherState}
 *
 * @param {unknown} target - Value to look for `key` in
 * @param {string | symbol} key - Property to check
 * @param {PropertyDescriptor<T>} descriptor - Expected property descriptor
 * @return {SyncExpectationResult} Expectation result
 */
function descriptor<T = any>(
  this: MatcherState,
  target: unknown,
  key: string | symbol,
  descriptor: PropertyDescriptor<T>
): SyncExpectationResult {
  /**
   * Own property descriptor for {@linkcode key}.
   *
   * @const {Optional<PropertyDescriptor>} actual
   */
  const actual: Optional<PropertyDescriptor> = Object.getOwnPropertyDescriptor(
    target,
    key
  )

  return {
    actual,
    expected: descriptor,
    message: (): string => {
      /**
       * Stringified target.
       *
       * @const {string} received
       */
      const received: string = this.utils.printReceived(target)

      /**
       * Stringified property descriptor object.
       *
       * @const {string} expected
       */
      const expected: string = this.utils.printExpected(descriptor)

      return [
        `expected ${received} to have property descriptor`,
        `for "${key.toString()}"`,
        actual ? `${this.isNot ? 'not ' : ''}deeply equal ${expected}` : ''
      ].join(' ')
    },
    pass: isEqual(actual, descriptor)
  }
}

expect.extend({ descriptor })
