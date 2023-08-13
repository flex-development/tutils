/**
 * @file Type Tests - TypeGuard
 * @module tutils/types/tests/unit-d/TypeGuard
 */

import type Vehicle from '#fixtures/types/vehicle'
import type TestSubject from '../type-guard'

describe('unit-d:types/TypeGuard', () => {
  it('should guard T', () => {
    // Arrange
    type T = Vehicle

    // Expect
    expectTypeOf<TestSubject<T>>().guards.toEqualTypeOf<T>()
  })
})
