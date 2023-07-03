/**
 * @file Type Tests - IfNegative
 * @module tutils/types/tests/unit-d/IfNegative
 */

import type TestSubject from '../if-negative'

describe('unit-d:types/IfNegative', () => {
  type F = 0
  type T = 1

  it('should equal F if IsNegative<U> extends false', () => {
    expectTypeOf<TestSubject<true, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsNegative<U> extends true', () => {
    expectTypeOf<TestSubject<-1n, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<-1n | '2' | 3, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
