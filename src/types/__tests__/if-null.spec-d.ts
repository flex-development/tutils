/**
 * @file Type Tests - IfNull
 * @module tutils/types/tests/unit-d/IfNull
 */

import type TestSubject from '../if-null'
import type Primitive from '../primitive'

describe('unit-d:types/IfNull', () => {
  type F = 0
  type T = 1

  it('should equal F if IsNull<U> extends false', () => {
    expectTypeOf<TestSubject<null[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsNull<U> extends true', () => {
    expectTypeOf<TestSubject<null, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Primitive, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
