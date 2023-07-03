/**
 * @file Type Tests - IsObject
 * @module tutils/types/tests/unit-d/IsObject
 */

import type TestSubject from '../is-object'
import type Nilable from '../nilable'

describe('unit-d:types/IsObject', () => {
  it('should equal false if T does not extend object', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends object', () => {
    expectTypeOf<TestSubject<object>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<object>>>().toEqualTypeOf<boolean>()
    })
  })
})
