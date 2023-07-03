/**
 * @file Type Tests - Intersection
 * @module tutils/types/tests/unit-d/Intersection
 */

import type Vehicle from '#fixtures/vehicle'
import type Dot from '../dot'
import type Indices from '../indices'
import type TestSubject from '../intersection'
import type Join from '../join'

describe('unit-d:types/Intersection', () => {
  type V = [Vehicle, Vehicle]

  it('should equal intersection of T and U', () => {
    // Arrange
    type T = Indices<V> | Join<[Indices<V>, keyof Vehicle], Dot>
    type U = '1.vin' | 'data' | 0

    // Expect
    expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Exclude<U, 'data'>>()
  })
})
