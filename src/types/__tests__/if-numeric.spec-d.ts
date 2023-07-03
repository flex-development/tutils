/**
 * @file Type Tests - IfNumeric
 * @module tutils/types/tests/unit-d/IfNumeric
 */

import type TestSubject from '../if-numeric'
import type Nilable from '../nilable'
import type Numeric from '../numeric'

describe('unit-d:types/IfNumeric', () => {
  type F = 0
  type T = 1

  it('should equal F if IsNumeric<U> extends false', () => {
    expectTypeOf<TestSubject<number, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsNumeric<U> extends true', () => {
    expectTypeOf<TestSubject<Numeric, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<Numeric>, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
