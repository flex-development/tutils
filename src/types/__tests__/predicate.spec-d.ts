/**
 * @file Type Tests - Predicate
 * @module tutils/types/tests/unit-d/Predicate
 */

import type TestSubject from '../predicate'

describe('unit-d:types/Predicate', () => {
  type T = number

  it('should be callable with [T, number, readonly T[]]', () => {
    expectTypeOf<TestSubject<T>>().parameters.toEqualTypeOf<
      [T, number, readonly T[]]
    >()
  })

  it('should return boolean', () => {
    expectTypeOf<TestSubject<T>>().returns.toBeBoolean()
  })
})
