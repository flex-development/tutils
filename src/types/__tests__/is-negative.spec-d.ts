/**
 * @file Type Tests - IsNegative
 * @module tutils/types/tests/unit-d/IsNegative
 */

import type TestSubject from '../is-negative'

describe('unit-d:types/IsNegative', () => {
  it('should equal false if T does not extend negative value', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends NegativeNumeric', () => {
    expectTypeOf<TestSubject<'-9'>>().toEqualTypeOf<true>()
  })

  it('should equal true if T extends negative bigint', () => {
    expectTypeOf<TestSubject<-9n>>().toEqualTypeOf<true>()
  })

  it('should equal true if T extends negative integer', () => {
    expectTypeOf<TestSubject<-9>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<-1n | -3 | '-2' | 0>>().toEqualTypeOf<boolean>()
    })
  })
})
