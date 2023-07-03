/**
 * @file Type Tests - IfKeys
 * @module tutils/types/tests/unit-d/IfKeys
 */

import type Vehicle from '#fixtures/vehicle'
import type TestSubject from '../if-keys'
import type Nilable from '../nilable'

describe('unit-d:types/IfKeys', () => {
  type F = 0
  type T = 1

  it('should equal F if HasKeys<U> extends false', () => {
    expectTypeOf<TestSubject<unknown, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if HasKeys<U> extends true', () => {
    expectTypeOf<TestSubject<Vehicle, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<Vehicle>, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
