/**
 * @file Type Tests - objectify
 * @module tutils/utils/tests/unit-d/objectify
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../objectify'

describe('unit-d:utils/objectify', () => {
  it('should return { [H in K]?: V }', () => {
    // Arrange
    type T = readonly [Vehicle, Vehicle]
    type K = number
    type V = Vehicle
    type Expect = { [H in K]?: V }

    // Expect
    expectTypeOf<typeof testSubject<T, K, V>>().returns.toEqualTypeOf<Expect>()
  })
})
