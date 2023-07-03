/**
 * @file Type Tests - AbstractConstructor
 * @module tutils/types/tests/unit-d/AbstractConstructor
 */

import type Vehicle from '#fixtures/vehicle'
import type TestSubject from '../constructor-abstract'

describe('unit-d:types/AbstractConstructor', () => {
  it('should equal abstract new (...args: A) => T', () => {
    // Arrange
    type A = [
      Vehicle['vin'],
      Vehicle['make'],
      Vehicle['model'],
      Vehicle['year']
    ]

    // Expect
    expectTypeOf<TestSubject<Vehicle, A>>().toEqualTypeOf<
      abstract new (...args: A) => Vehicle
    >()
  })
})
