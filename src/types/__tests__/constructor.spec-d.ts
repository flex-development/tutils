/**
 * @file Type Tests - Constructor
 * @module tutils/types/tests/unit-d/Constructor
 */

import type Vehicle from '#fixtures/vehicle'
import type TestSubject from '../constructor'

describe('unit-d:types/Constructor', () => {
  it('should equal new (...args: A) => T', () => {
    // Arrange
    type T = Vehicle
    type A = [Vehicle['vin']]

    // Expect
    expectTypeOf<TestSubject<T, A>>().toEqualTypeOf<new (...args: A) => T>()
  })
})
