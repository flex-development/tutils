/**
 * @file Type Tests - IsTrue
 * @module tutils/types/tests/unit-d/IsTrue
 */

import type Booleanish from '../booleanish'
import type TestSubject from '../is-true'

describe('unit-d:types/IsTrue', () => {
  it('should equal false if T does not extend true', () => {
    expectTypeOf<TestSubject<false>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends true', () => {
    expectTypeOf<TestSubject<true>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Booleanish>>().toEqualTypeOf<boolean>()
      expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<boolean>()
    })
  })
})
