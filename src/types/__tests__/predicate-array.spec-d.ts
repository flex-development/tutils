/**
 * @file Type Tests - ArrayPredicate
 * @module tutils/types/tests/unit-d/ArrayPredicate
 */

import type Vehicle from '#fixtures/types/vehicle'
import type Nullable from '../nullable'
import type Predicate from '../predicate'
import type TestSubject from '../predicate-array'

describe('unit-d:types/ArrayPredicate', () => {
  it('should equal Predicate<[T[number], number, T]>', () => {
    // Arrange
    type T = readonly Nullable<Vehicle>[]
    type Expect = Predicate<[item: T[number], index: number, array: T]>

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
  })
})
