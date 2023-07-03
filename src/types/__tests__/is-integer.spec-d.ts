/**
 * @file Type Tests - IsInteger
 * @module tutils/types/tests/unit-d/IsInteger
 */

import type Integer from '../integer'
import type TestSubject from '../is-integer'

describe('unit-d:types/IsInteger', () => {
  it('should equal false if T does not extend an integer', () => {
    expectTypeOf<TestSubject<bigint>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<number>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends an integer', () => {
    expectTypeOf<TestSubject<3>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<Integer>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<'-2' | 1>>().toEqualTypeOf<boolean>()
    })
  })
})
