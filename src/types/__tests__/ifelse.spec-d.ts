/**
 * @file Type Tests - Ifelse
 * @module tutils/types/tests/unit-d/Ifelse
 */

import type Vehicle from '#fixtures/types/vehicle'
import type TestSubject from '../ifelse'
import type Integer from '../integer'
import type NaN from '../nan'
import type Partial from '../partial'

describe('unit-d:types/Ifelse', () => {
  type F = NaN
  type T = Integer

  it('should equal F | T if IsAny<T> extends true', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F | T>()
  })

  it('should equal F if IsNever<U> extends true', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U extends Falsy', () => {
    expectTypeOf<TestSubject<undefined, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if U does not extend Falsy', () => {
    expectTypeOf<TestSubject<13, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type U = Partial<Vehicle>['vin' | 'year']

      // Expect
      expectTypeOf<TestSubject<U, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
