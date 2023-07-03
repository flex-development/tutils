/**
 * @file Type Tests - IfPrimitive
 * @module tutils/types/tests/unit-d/IfPrimitive
 */

import type TestSubject from '../if-primitive'
import type OneOrMany from '../one-or-many'
import type Primitive from '../primitive'

describe('unit-d:types/IfPrimitive', () => {
  type F = 0
  type T = 1

  it('should equal F if IsPrimitive<U> extends false', () => {
    expectTypeOf<TestSubject<Primitive[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsPrimitive<U> extends true', () => {
    expectTypeOf<TestSubject<Primitive, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type U = OneOrMany<string>

      // Expect
      expectTypeOf<TestSubject<U, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
