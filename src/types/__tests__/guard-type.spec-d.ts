/**
 * @file Type Tests - TypeGuard
 * @module tutils/types/tests/unit-d/TypeGuard
 */

import type Vehicle from '#fixtures/types/vehicle'
import type TestSubject from '../guard-type'
import type Predicate from '../predicate'

describe('unit-d:types/TypeGuard', () => {
  type T = Vehicle

  it('should be callable with [unknown]', () => {
    expectTypeOf<TestSubject<T>>().parameters.toEqualTypeOf<[unknown]>()
  })

  it('should guard T', () => {
    expectTypeOf<TestSubject<T>>().guards.toEqualTypeOf<T>()
  })

  it('should match Predicate', () => {
    expectTypeOf<TestSubject<T>>().toMatchTypeOf<Predicate>()
  })
})
