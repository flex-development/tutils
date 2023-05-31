/**
 * @file Type Tests - Fn
 * @module tutils/types/tests/unit-d/Fn
 */

import type TestSubject from '../fn'
import type Optional from '../optional'

describe('unit-d:types/Fn', () => {
  type A = [string, Optional<string> | RegExp, Optional<number>?]
  type R = string[]
  type Subject = TestSubject<A, R>

  it('should be callable with A', () => {
    expectTypeOf<Subject>().parameters.toEqualTypeOf<A>()
  })

  it('should return R', () => {
    expectTypeOf<Subject>().returns.toEqualTypeOf<R>()
  })
})
