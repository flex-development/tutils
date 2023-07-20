/**
 * @file Type Tests - Predicate
 * @module tutils/types/tests/unit-d/Predicate
 */

import type Vehicle from '#fixtures/types/vehicle'
import type Mapper from '../mapper'
import type Nullable from '../nullable'
import type TestSubject from '../predicate'

describe('unit-d:types/Predicate', () => {
  it('should Mapper<T, boolean>', () => {
    // Arrange
    type T = readonly [Vehicle, Nullable<Vehicle>?]

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Mapper<T, boolean>>()
  })
})
