/**
 * @file Type Tests - IsJsonPrimitive
 * @module tutils/types/tests/unit-d/IsJsonPrimitive
 */

import type TestSubject from '../is-json-primitive'
import type JsonPrimitive from '../json-primitive'
import type Optional from '../optional'

describe('unit-d:types/IsJsonPrimitive', () => {
  it('should equal false if T does not extend JsonPrimitive', () => {
    expectTypeOf<TestSubject<object>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends JsonPrimitive', () => {
    expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<null>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<number>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<string>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T1 = JsonPrimitive
      type T2 = Optional<T1>

      // Expect
      expectTypeOf<TestSubject<T1>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<boolean>()
    })
  })
})
