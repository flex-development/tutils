/**
 * @file Type Tests - IfBigInt
 * @module tutils/types/tests/unit-d/IfBigInt
 */

import type TestSubject from '../if-big-int'
import type Primitive from '../primitive'

describe('unit-d:types/IfBigInt', () => {
  type F = 0
  type T = 1

  it('should equal F if IsBigInt<U> extends false', () => {
    expectTypeOf<TestSubject<bigint[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsBigInt<U> extends true', () => {
    expectTypeOf<TestSubject<bigint, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Primitive, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
