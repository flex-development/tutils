/**
 * @file Type Tests - IfAny
 * @module tutils/types/tests/unit-d/IfAny
 */

import type TestSubject from '../if-any'

describe('unit-d:types/IfAny', () => {
  type F = 0
  type T = 1

  it('should equal F if IsAny<U> extends false', () => {
    expectTypeOf<TestSubject<any[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsAny<U> extends true', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<T>()
  })
})
