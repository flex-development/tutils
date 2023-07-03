/**
 * @file Type Tests - IfTuple
 * @module tutils/types/tests/unit-d/IfTuple
 */

import type TestSubject from '../if-tuple'

describe('unit-d:types/IfTuple', () => {
  type F = 0
  type T = 1

  it('should equal F if IsTuple<U> extends false', () => {
    expectTypeOf<TestSubject<number[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsTuple<U> extends true', () => {
    expectTypeOf<TestSubject<[0, 1, 2], T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type U = number | [0, 1, 2]

      // Expect
      expectTypeOf<TestSubject<U, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
