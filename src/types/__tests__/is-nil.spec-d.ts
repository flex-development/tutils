/**
 * @file Type Tests - IsNil
 * @module tutils/types/tests/unit-d/IsNil
 */

import type TestSubject from '../is-nil'
import type NIL from '../nil'

describe('unit-d:types/IsNil', () => {
  it('should equal false if T does not extend NIL', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends NIL', () => {
    expectTypeOf<TestSubject<null>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<NIL>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<NIL | number>>().toEqualTypeOf<boolean>()
    })
  })
})
