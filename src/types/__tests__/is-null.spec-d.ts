/**
 * @file Type Tests - IsNull
 * @module tutils/types/tests/unit-d/IsNull
 */

import type TestSubject from '../is-null'
import type Nullable from '../nullable'

describe('unit-d:types/IsNull', () => {
  it('should equal false if T does not extend null', () => {
    expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends null', () => {
    expectTypeOf<TestSubject<null>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nullable<number>>>().toEqualTypeOf<boolean>()
    })
  })
})
