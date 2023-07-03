/**
 * @file Type Tests - IfNumber
 * @module tutils/types/tests/unit-d/IfNumber
 */

import type TestSubject from '../if-number'
import type Primitive from '../primitive'

describe('unit-d:types/IfNumber', () => {
  type F = 0
  type T = 1

  it('should equal F if IsNumber<U> extends false', () => {
    expectTypeOf<TestSubject<number[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsNumber<U> extends true', () => {
    expectTypeOf<TestSubject<number, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Primitive, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
