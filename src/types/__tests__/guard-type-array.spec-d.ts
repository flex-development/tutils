/**
 * @file Type Tests - ArrayTypeGuard
 * @module tutils/types/tests/unit-d/ArrayTypeGuard
 */

import type Vehicle from '#fixtures/types/vehicle'
import type TestSubject from '../guard-type-array'
import type ArrayPredicate from '../predicate-array'

describe('unit-d:types/ArrayTypeGuard', () => {
  type G = Vehicle['vin']
  type T = (G | Vehicle)[]

  it('should be callable with [T[number], number, T]', () => {
    // Arrange
    type Expect = [item: T[number], index: number, array: T]

    // Expect
    expectTypeOf<TestSubject<T, G>>().parameters.toEqualTypeOf<Expect>()
  })

  it('should guard G', () => {
    expectTypeOf<TestSubject<T, G>>().guards.toEqualTypeOf<G>()
  })

  it('should match ArrayPredicate<T>', () => {
    expectTypeOf<TestSubject<T, G>>().toMatchTypeOf<ArrayPredicate<T>>()
  })
})
