/**
 * @file Type Tests - IsBigInt
 * @module tutils/types/tests/unit-d/IsBigInt
 */

import type TestSubject from '../is-big-int'
import type Nilable from '../nilable'

describe('unit-d:types/IsBigInt', () => {
  it('should equal false if T does not extend bigint', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends bigint', () => {
    expectTypeOf<TestSubject<1n>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<bigint>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<1n>>>().toEqualTypeOf<boolean>()
      expectTypeOf<TestSubject<Nilable<bigint>>>().toEqualTypeOf<boolean>()
    })
  })
})
