/**
 * @file Type Tests - IfUnknown
 * @module tutils/types/tests/unit-d/IfUnknown
 */

import type TestSubject from '../if-unknown'

describe('unit-d:types/IfUnknown', () => {
  type F = 0
  type T = 1

  it('should equal F if IsUnknown<U> extends false', () => {
    expectTypeOf<TestSubject<unknown[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsUnknown<U> extends true', () => {
    expectTypeOf<TestSubject<unknown, T, F>>().toEqualTypeOf<T>()
  })
})
