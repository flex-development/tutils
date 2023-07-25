/**
 * @file Type Tests - Shake
 * @module tutils/types/tests/unit-d/Shake
 */

import type Vehicle from '#fixtures/types/vehicle'
import type Fn from '../fn'
import type NumberString from '../number-string'
import type Optional from '../optional'
import type Partial from '../partial'
import type TestSubject from '../shake'

describe('unit-d:types/Shake', () => {
  it('should equal {} if F is any', () => {
    expectTypeOf<TestSubject<Vehicle, any>>().toEqualTypeOf<{}>()
  })

  it('should equal T if F is never', () => {
    expectTypeOf<TestSubject<Vehicle, never>>().toEqualTypeOf<Vehicle>()
  })

  describe('T extends ObjectCurly', () => {
    it('should exclude F from T', () => {
      // Arrange
      type T = { vin: string; year: NumberString }
      type F = string

      // Expect
      expectTypeOf<TestSubject<T, F>>().toEqualTypeOf<{
        year: Exclude<NumberString, F>
      }>()
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Partial<Vehicle> | Vehicle
      type F = Optional<Fn | string>

      // Expect
      expectTypeOf<TestSubject<T, F>>().toEqualTypeOf<
        { year: Vehicle['year'] } | { year?: Vehicle['year'] }
      >()
    })
  })
})
