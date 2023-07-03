/**
 * @file Type Tests - IfAnyOrNever
 * @module tutils/types/tests/unit-d/IfAnyOrNever
 */

import type TestSubject from '../if-any-or-never'

describe('unit-d:types/IfAnyOrNever', () => {
  type F = 0
  type T = 1

  it('should equal F if IsAnyOrNever<U> extends false', () => {
    expectTypeOf<TestSubject<unknown, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsAnyOrNever<U> extends true', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<T>()
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<T>()
  })
})
