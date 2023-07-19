/**
 * @file Type Tests - Mapper
 * @module tutils/types/tests/unit-d/Mapper
 */

import type Vehicle from '#fixtures/types/vehicle'
import type Fn from '../fn'
import type TestSubject from '../mapper'
import type Nullable from '../nullable'

describe('unit-d:types/Mapper', () => {
  it('should equal Fn<[T[number], number, T], R>', () => {
    // Arrange
    type T = readonly [Vehicle, Nullable<Vehicle>?]
    type R = boolean
    type Expect = Fn<[T[number], number, T], R>

    // Expect
    expectTypeOf<TestSubject<T, R>>().toEqualTypeOf<Expect>()
  })
})
