/**
 * @file Type Tests - IsNegativeInteger
 * @module tutils/types/tests/unit-d/IsNegativeInteger
 */

import type TestSubject from '../is-integer-negative'

describe('unit-d:types/IsNegativeInteger', () => {
  it('should equal false if T does not extend a negative integer', () => {
    expectTypeOf<TestSubject<-1n>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends a negative integer', () => {
    expectTypeOf<TestSubject<-3>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<-1 | false>>().toEqualTypeOf<boolean>()
    })
  })
})
