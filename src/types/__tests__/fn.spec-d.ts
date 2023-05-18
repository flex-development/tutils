/**
 * @file Type Tests - Fn
 * @module tutils/types/tests/unit-d/Fn
 */

import type TestSubject from '../fn'

describe('unit-d:types/Fn', () => {
  type A = [string, RegExp | string | undefined, (number | undefined)?]
  type R = string[]
  type Subject = TestSubject<A, R>

  it('should be callable with A', () => {
    expectTypeOf<Subject>().parameters.toEqualTypeOf<A>()
  })

  it('should return R', () => {
    expectTypeOf<Subject>().returns.toEqualTypeOf<R>()
  })
})
