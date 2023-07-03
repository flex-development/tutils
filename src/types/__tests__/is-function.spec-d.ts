/**
 * @file Type Tests - IsFunction
 * @module tutils/types/tests/unit-d/IsFunction
 */

import type Fn from '../fn'
import type TestSubject from '../is-function'
import type Nilable from '../nilable'

describe('unit-d:types/IsFunction', () => {
  it('should equal false if T does not extend Function', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends Function', () => {
    expectTypeOf<TestSubject<Fn['caller']>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<Fn>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<(n: number) => string>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<Fn>>>().toEqualTypeOf<boolean>()
    })
  })
})
