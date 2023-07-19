/**
 * @file Type Tests - IfKey
 * @module tutils/types/tests/unit-d/IfKey
 */

import type Vehicle from '#fixtures/types/vehicle'
import type TestSubject from '../if-key'
import type Nilable from '../nilable'

describe('unit-d:types/IfKey', () => {
  type F = 0
  type T = 1

  it('should equal F if HasKey<U, K> extends false', () => {
    expectTypeOf<TestSubject<unknown, 'vin', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, 'vrm', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if HasKey<U, K> extends true', () => {
    expectTypeOf<TestSubject<Vehicle, 'vin', T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type U = Nilable<Vehicle>
      type K = keyof Vehicle

      // Expect
      expectTypeOf<TestSubject<U, K, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
