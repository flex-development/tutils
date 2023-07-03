/**
 * @file Type Tests - IfNegativeNumeric
 * @module tutils/types/tests/unit-d/IfNegativeNumeric
 */

import type TestSubject from '../if-numeric-negative'

describe('unit-d:types/IfNegativeNumeric', () => {
  type F = 0
  type T = 1

  it('should equal F if IsNegativeNumeric<U> extends false', () => {
    expectTypeOf<TestSubject<'5', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsNegativeNumeric<U> extends true', () => {
    expectTypeOf<TestSubject<'-5', T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<'-5' | '5', T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
