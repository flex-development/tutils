/**
 * @file Type Tests - Predicate
 * @module tutils/types/tests/unit-d/Predicate
 */

import type Vehicle from '#fixtures/types/vehicle'
import type Fn from '../fn'
import type Nullable from '../nullable'
import type TestSubject from '../predicate'

describe('unit-d:types/Predicate', () => {
  it('should equal Fn<T, boolean>', () => {
    // Arrange
    type T = readonly [Nullable<Vehicle>?]

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Fn<T, boolean>>()
  })
})
