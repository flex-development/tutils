/**
 * @file Type Tests - IsUndefined
 * @module tutils/types/tests/unit-d/IsUndefined
 */

import type TestSubject from '../is-undefined'
import type Nilable from '../nilable'

describe('unit-d:types/IsUndefined', () => {
  it('should equal false if T does not extend undefined', () => {
    expectTypeOf<TestSubject<null>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends undefined', () => {
    expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<string>>>().toEqualTypeOf<boolean>()
    })
  })
})
