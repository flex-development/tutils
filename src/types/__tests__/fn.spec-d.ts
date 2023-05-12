/**
 * @file Type Tests - Fn
 * @module tutils/types/tests/unit-d/Fn
 */

import type TestSubject from '../fn'

describe('unit-d:types/Fn', () => {
  it('should be callable with A', () => {
    expectTypeOf<TestSubject>().parameters.toEqualTypeOf<any[]>()
    expectTypeOf<TestSubject<[string]>>().parameters.toEqualTypeOf<[string]>()
  })

  it('should return R', () => {
    expectTypeOf<TestSubject>().returns.toBeAny()
    expectTypeOf<TestSubject<any, string>>().returns.toBeString()
  })
})
