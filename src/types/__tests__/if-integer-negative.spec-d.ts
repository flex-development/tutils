/**
 * @file Type Tests - IfNegativeInteger
 * @module tutils/types/tests/unit-d/IfNegativeInteger
 */

import type TestSubject from '../if-integer-negative'

describe('unit-d:types/IfNegativeInteger', () => {
  type F = 0
  type T = 1

  it('should equal F if IsNegativeInteger<U> extends false', () => {
    expectTypeOf<TestSubject<1, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsNegativeInteger<U> extends true', () => {
    expectTypeOf<TestSubject<-1, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<-1 | 1, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
