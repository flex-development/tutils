/**
 * @file Type Tests - Fn
 * @module tutils/types/tests/unit-d/Fn
 */

import type ANY from '../any'
import type TestSubject from '../fn'

describe('unit-d:types/Fn', () => {
  it('should be callable with Args', () => {
    expectTypeOf<TestSubject>().parameters.toEqualTypeOf<ANY[]>()
    expectTypeOf<TestSubject<[string]>>().parameters.toEqualTypeOf<[string]>()
  })

  it('should return Ret', () => {
    expectTypeOf<TestSubject>().returns.toEqualTypeOf<ANY>()
    expectTypeOf<TestSubject<ANY, string>>().returns.toBeString()
  })
})
