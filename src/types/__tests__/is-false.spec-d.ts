/**
 * @file Type Tests - IsFalse
 * @module tutils/types/tests/unit-d/IsFalse
 */

import type Falsy from '../falsy'
import type TestSubject from '../is-false'

describe('unit-d:types/IsFalse', () => {
  it('should equal false if T does not extend false', () => {
    expectTypeOf<TestSubject<true>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends false', () => {
    expectTypeOf<TestSubject<false>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Falsy>>().toEqualTypeOf<boolean>()
      expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<boolean>()
    })
  })
})
