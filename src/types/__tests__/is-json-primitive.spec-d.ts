/**
 * @file Type Tests - IsJsonPrimitive
 * @module tutils/types/tests/unit-d/IsJsonPrimitive
 */

import type TestSubject from '../is-json-primitive'
import type JsonPrimitive from '../json-primitive'
import type OneOrMany from '../one-or-many'

describe('unit-d:types/IsJsonPrimitive', () => {
  it('should equal false if [T] does not extend [JsonPrimitive]', () => {
    expectTypeOf<TestSubject<OneOrMany<JsonPrimitive>>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<object>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [JsonPrimitive]', () => {
    expectTypeOf<TestSubject<JsonPrimitive>>().toEqualTypeOf<true>()
  })
})
